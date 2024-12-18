import { callPost } from '@/app/utils/callApi';

interface PredictionData {
  dates: string[];
  predictions: number[];
}

interface PredictionResult {
  indicator: string;
  data?: PredictionData;
  error?: string;
}

const RD = 'RD';
const RNN = 'RNN';
const ID = 'ID';

export const predictionSide = async (
  indicators: string[],
  reqBody: { dateFrom: string; dateTo: string; stockcode: string },
): Promise<PredictionResult[]> => {
  const endpoints: { [key: string]: string } = {
    예측법1: RD,
    예측법2: RNN,
    예측법3: ID,
  };

  try {
    const promises = indicators.map((indicator) => {
      const endpoint = endpoints[indicator];

      if (!endpoint) {
        console.error(`유효하지 않은 indicator: ${indicator}`);
        return Promise.resolve({
          indicator,
          error: `'${indicator}'은(는) 유효하지 않은 지표입니다.`,
        });
      }

      return callPost(`/api/stocks/predictions?operation=${endpoint}`, reqBody)
        .then((response) => {
          if (response?.isSuccess && response.result) {
            return {
              indicator,
              data: {
                dates: response.result.dates,
                predictions: response.result.predictions,
              },
            };
          }
          return {
            indicator,
            error:
              response?.message ||
              '서버에서 유효한 데이터를 반환하지 않았습니다.',
          };
        })
        .catch((error) => {
          console.error(`${indicator} 데이터 가져오는 중 에러 발생:`, error);
          return {
            indicator,
            error: error.message || '네트워크 또는 서버 오류 발생',
          };
        });
    });

    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    console.error('전체 예측 처리 중 에러 발생:', error);
    return [];
  }
};
