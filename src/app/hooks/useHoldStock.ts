import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useStockStore from '../store/store';
import { callGet } from '../utils/callApi';

const fetchHoldStockAndInfo = async (
  stockCode: string,
): Promise<{
  holdStock: HoldStockRecordTypes[];
  stockInfo: HoldStockInfoTypes;
}> => {
  const [holdStockResponse, stockInfoResponse] = await Promise.all([
    callGet(
      `/api/stocks/trade/investment?code=${stockCode}&page=1&size=20&property=createdAt&direction=desc`,
    ),
    callGet(`/api/stocks/hold/info?code=${stockCode}`),
  ]);

  return {
    holdStock: holdStockResponse.result.content,
    stockInfo: stockInfoResponse.result,
  };
};

export const useHoldStock = () => {
  const { stockCode } = useStockStore();

  return useQuery({
    queryKey: ['holdStock', stockCode],
    queryFn: () => fetchHoldStockAndInfo(stockCode),
    enabled: !!stockCode,
  });
};

export const useInvalidateHoldStock = () => {
  const queryClient = useQueryClient();
  const { stockCode } = useStockStore();

  return useMutation({
    mutationFn: () => fetchHoldStockAndInfo(stockCode),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['holdStock', stockCode] });
    },
  });
};
