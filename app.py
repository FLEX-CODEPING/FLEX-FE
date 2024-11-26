from flask import Flask, jsonify
from flask_cors import CORS
import requests
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import StandardScaler, MinMaxScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout
from datetime import datetime, timedelta

app = Flask(__name__)
CORS(app)

def get_bitcoin_data():
    url = "https://api.upbit.com/v1/candles/days"
    headers = {"Accept": "application/json"}
    params = {"market": "KRW-BTC", "count": 365}
    response = requests.get(url, headers=headers, params=params)
    data = response.json()
    
    df = pd.DataFrame([{
        "timestamp": datetime.strptime(item['candle_date_time_kst'], "%Y-%m-%dT%H:%M:%S"),
        "close": item['trade_price']
    } for item in data])
    df = df.sort_values("timestamp")
    df.set_index("timestamp", inplace=True)
    return df

# 예측 1: Random Forest
@app.route('/predict1', methods=['POST'])
def predict1():
    try:
        df = get_bitcoin_data()
        window_size = 20
        scaler = StandardScaler()
        scaled_data = scaler.fit_transform(df['close'].values.reshape(-1, 1))

        X, y = [], []
        for i in range(window_size, len(scaled_data)):
            X.append(scaled_data[i-window_size:i, 0])
            y.append(scaled_data[i, 0])

        X, y = np.array(X), np.array(y)

        model = RandomForestRegressor(n_estimators=100, random_state=42)
        model.fit(X, y)

        predictions = []
        last_window = scaled_data[-window_size:].flatten()

        for _ in range(5):
            pred = model.predict(last_window.reshape(1, -1))
            predictions.append(pred[0])
            last_window = np.append(last_window[1:], pred)

        predicted_prices = scaler.inverse_transform(np.array(predictions).reshape(-1, 1))
        future_dates = [(df.index[-1] + timedelta(days=i + 1)).strftime('%Y-%m-%d') for i in range(5)]
        return jsonify({"dates": future_dates, "predictions": predicted_prices.flatten().tolist()})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# 예측 2: LSTM 예측
@app.route('/predict2', methods=['POST'])
def predict2():
    try:
        df = get_bitcoin_data()
        window_size = 60
        scaler = MinMaxScaler(feature_range=(0, 1))
        scaled_data = scaler.fit_transform(df['close'].values.reshape(-1, 1))

        X, y = [], []
        for i in range(window_size, len(scaled_data)):
            X.append(scaled_data[i-window_size:i, 0])
            y.append(scaled_data[i, 0])

        X, y = np.array(X), np.array(y)
        X = np.reshape(X, (X.shape[0], X.shape[1], 1))

        # LSTM 모델 구성
        model = Sequential()
        model.add(LSTM(units=50, return_sequences=True, input_shape=(X.shape[1], 1)))
        model.add(Dropout(0.2))
        model.add(LSTM(units=50, return_sequences=True))
        model.add(Dropout(0.2))
        model.add(LSTM(units=50))
        model.add(Dropout(0.2))
        model.add(Dense(units=1))

        model.compile(optimizer='adam', loss='mean_squared_error')
        model.fit(X, y, epochs=50, batch_size=32)

        predictions = []
        last_window = scaled_data[-window_size:].flatten()

        for _ in range(5):
            pred = model.predict(last_window.reshape(1, -1, 1))
            predictions.append(pred[0, 0])
            last_window = np.append(last_window[1:], pred[0, 0])

        predicted_prices = scaler.inverse_transform(np.array(predictions).reshape(-1, 1))
        future_dates = [(df.index[-1] + timedelta(days=i + 1)).strftime('%Y-%m-%d') for i in range(5)]
        return jsonify({"dates": future_dates, "predictions": predicted_prices.flatten().tolist()})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# 예측 3: LSTM + 극점 예측
@app.route('/predict3', methods=['POST'])
def predict3():
    try:
        df = get_bitcoin_data()
        window_size = 60
        scaler = MinMaxScaler(feature_range=(0, 1))
        scaled_data = scaler.fit_transform(df['close'].values.reshape(-1, 1))

        X, y = [], []
        for i in range(window_size, len(scaled_data)):
            X.append(scaled_data[i-window_size:i, 0])
            y.append(scaled_data[i, 0])

        X, y = np.array(X), np.array(y)
        X = np.reshape(X, (X.shape[0], X.shape[1], 1))

        model = Sequential()
        model.add(LSTM(units=50, return_sequences=True, input_shape=(X.shape[1], 1)))
        model.add(LSTM(units=50))
        model.add(Dense(1))
        model.compile(optimizer='adam', loss='mean_squared_error')
        model.fit(X, y, epochs=20, batch_size=32)

        predictions = []
        last_window = scaled_data[-window_size:].flatten()

        for _ in range(5):
            pred = model.predict(last_window.reshape(1, -1, 1))
            predictions.append(pred[0, 0])
            last_window = np.append(last_window[1:], pred[0, 0])

        predicted_prices = scaler.inverse_transform(np.array(predictions).reshape(-1, 1))
        future_dates = [(df.index[-1] + timedelta(days=i + 1)).strftime('%Y-%m-%d') for i in range(5)]
        return jsonify({"dates": future_dates, "predictions": predicted_prices.flatten().tolist()})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
