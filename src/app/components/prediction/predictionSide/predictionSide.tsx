import axios from 'axios';

interface PredictionData {
  dates: string[];
  predictions: number[];
}

interface PredictionResult {
  indicator: string;
  data?: PredictionData;
  error?: string;
}

export const fetchPredictionData = async (
  indicators: string[],
): Promise<PredictionResult[]> => {
  const endpoints: { [key: string]: string } = {
    예측법1: '/predict1',
    예측법2: '/predict2',
    예측법3: '/predict3',
  };

  try {
    const promises = indicators.map((indicator) => {
      if (endpoints[indicator]) {
        return axios
          .post<PredictionData>(`http://127.0.0.1:5000${endpoints[indicator]}`)
          .then(({ data }: { data: PredictionData }) => ({
            indicator,
            data,
          }));
      }
      return Promise.resolve({ indicator, error: 'Invalid indicator' });
    });

    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    console.error('Error fetching prediction data:', error);
    return [];
  }
};
