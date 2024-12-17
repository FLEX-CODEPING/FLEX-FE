import { callDelete, callGet, callPost } from '@/app/utils/callApi';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useInterestStocks = () => {
  return useQuery({
    queryKey: ['interestStocks'],
    queryFn: async () => {
      const response = await callGet(`api/stocks/interest`);
      const interestDatas: InterestedStockTypes[] = response.result.content;

      const prices: InterestedPriceTypes[] = await Promise.all(
        interestDatas.map(async (item: InterestedStockTypes) => {
          const data = await callPost(
            `/api/stocks/price/inquire?stockcode=${item.stockcode}`,
          );
          const priceData = data.result[0];
          return {
            stockcode: item.stockcode,
            currentPrice: priceData.stck_prpr,
            changeAmount: priceData.prdy_vrss,
            changePercent: priceData.prdy_ctrt,
            changeSign: priceData.prdy_vrss_sign,
          };
        }),
      );

      return { stocks: interestDatas, stockPrices: prices };
    },
  });
};

export const useDeleteInterestStock = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      return callDelete(`api/stocks/interest?id=${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['interestStocks'] });
    },
  });
};

export const useAddInterestStock = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (stockcode: string) => {
      return callPost(`api/stocks/interest?code=${stockcode}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['interestStocks'] });
    },
  });
};
