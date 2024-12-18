import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const fetchTradeRecords = async (): Promise<TransactionDataTypes[]> => {
  const response = await fetch(
    `/api/stocks/trade/transactions?page=1&size=30&property=createdAt&direction=desc`,
  );
  const data = await response.json();
  return data.result.content as TransactionDataTypes[];
};

export const useRefreshTrade = () => {
  return useQuery<TransactionDataTypes[]>({
    queryKey: ['tradeRecords'],
    queryFn: () => fetchTradeRecords(),
  });
};

export const useInvalidateTrade = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: fetchTradeRecords,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tradeRecords'] });
    },
  });
};
