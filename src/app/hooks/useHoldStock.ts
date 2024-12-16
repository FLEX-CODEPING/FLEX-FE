import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useStockStore from '../store/store';
import { callGet } from '../utils/callApi';

const fetchHoldStock = async (
  stockCode: string,
): Promise<HoldStockRecordTypes[]> => {
  const response = await callGet(
    `/api/stocks/trade/investment?code=${stockCode}&page=${1}&size=${20}&property=createdAt&direction=desc`,
  );
  console.log(stockCode, '로 요청 fetchHoldStock');

  return response.result.content;
};

export const useHoldStock = () => {
  const { stockCode } = useStockStore();
  return useQuery({
    queryKey: ['holdStock', stockCode],
    queryFn: () => fetchHoldStock(stockCode),
    enabled: !!stockCode,
  });
};

export const useInvalidateHoldStock = () => {
  const queryClient = useQueryClient();
  const { stockCode } = useStockStore();
  console.log(stockCode, '로 요청 useInvalidateHoldStock');

  return useMutation({
    mutationFn: () => fetchHoldStock(stockCode),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['holdStock', stockCode] });
    },
  });
};
