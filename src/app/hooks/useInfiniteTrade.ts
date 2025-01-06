import { useInfiniteQuery } from '@tanstack/react-query';
import { callGet } from '../utils/callApi';

const fetchTradeRecords = async ({ pageParam = 1 }: { pageParam: number }) => {
  const data = await callGet(
    `/api/stocks/trade/transactions?page=${pageParam}&size=12&property=createdAt&direction=desc`,
  );
  return data.result as TransactionResponse;
};

export const useInfiniteTrade = () => {
  return useInfiniteQuery<TransactionResponse>({
    queryKey: ['tradeRecords'],
    queryFn: (context) =>
      fetchTradeRecords({ pageParam: context.pageParam as number }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.hasNext ? allPages.length + 1 : undefined,
    getPreviousPageParam: (firstPage) => (firstPage.first ? undefined : 1),
    initialPageParam: 1,
  });
};
