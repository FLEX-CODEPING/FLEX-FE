interface PredictionData {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

interface PredictIndicatorProps {
  onIndicatorsChange: (indicators: string[]) => void;
  onPredictionResult: (result: {
    stockName: string;
    result: string;
    resultPrice: number;
    resultPercent: number;
    chartData: PredictionData[];
  }) => void;
}

interface PredictionResultDataTypes {
  dates: string[];
  predictions: number[];
}

interface PredictionResult {
  indicator: string;
  data?: PredictionResultDataTypes;
  error?: string;
}
