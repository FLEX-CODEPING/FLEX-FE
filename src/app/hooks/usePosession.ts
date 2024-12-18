import { callGet, callPost } from '@/app/utils/callApi';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const fetchHoldStocks = async () => {
  const response = await callGet(
    `/api/stocks/hold?holdStatus=HOLDING&page=1&size=20&property=createdAt&direction=desc`,
  );
  const stocks = response.result.content;
  const stockPrices = await Promise.all(
    stocks.map(async (item: HoldStockTypes) => {
      const data = await callPost(
        `/api/stocks/price/inquire?stockcode=${item.stockCode}`,
      );
      return { stockCode: item.stockCode, price: data.result[0].stck_prpr };
    }),
  );
  return { stocks, stockPrices };
};

export const useHoldStocks = () => {
  return useQuery<
    { stocks: HoldStockTypes[]; stockPrices: StockPriceTypes[] },
    Error
  >({
    queryKey: ['holdStocks'],
    queryFn: fetchHoldStocks,
  });
};

export const useRefreshHoldStocks = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchHoldStocks,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['holdStocks'] });
    },
  });
};
