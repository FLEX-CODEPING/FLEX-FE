import axios from 'axios';

export const fetchPredictionData = async (indicators: string[]) => {
  const endpoints: { [key: string]: string } = {
    예측법1: '/predict1',
    예측법2: '/predict2',
    예측법3: '/predict3',
  };

  try {
    for (const indicator of indicators) {
      try {
        const response = await axios.post(
          `http://127.0.0.1:5000${endpoints[indicator]}`,
        );
        return response.data;
      } catch (error) {
        console.error(`Error fetching ${indicator}:`, error);
      }
    }

    return null;
  } catch (error) {
    console.error('Error fetching prediction data:', error);
    return null;
  }
};
