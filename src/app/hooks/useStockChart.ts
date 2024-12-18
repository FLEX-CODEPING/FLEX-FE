import {
  fetchAdditionalData,
  fetchDailyAdditional,
  fetchInitialData,
  fetchInitialDay,
} from '@/app/utils/fetchStockData';
import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

// 쿼리 옵션 생성 함수
const createStockDataQueryOptions = (
  stockCode: string | null,
  timeFrame: number | string,
  isDay: boolean,
) =>
  queryOptions({
    queryKey: isDay
      ? ['dailyStockData', stockCode, timeFrame]
      : ['minStockData', stockCode],
    queryFn: async () => {
      if (!stockCode) return [];
      return isDay
        ? await fetchInitialDay(stockCode, timeFrame as string)
        : await fetchInitialData(stockCode);
    },
    enabled: !!stockCode && (isDay ? true : typeof timeFrame === 'number'),
    staleTime: 1000 * 60 * 5, // 5분 캐싱
  });

export const useStockData = (
  stockCode: string | null,
  timeFrame: number | string,
) => {
  const isDay = typeof timeFrame === 'string';
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery(
    createStockDataQueryOptions(stockCode, timeFrame, isDay),
  );

  const additionalDataMutation = useMutation({
    mutationFn: async () => {
      if (!stockCode) return [];

      const currentData =
        queryClient.getQueryData(
          isDay
            ? ['dailyStockData', stockCode, timeFrame]
            : ['minStockData', stockCode],
        ) || [];

      return isDay
        ? fetchDailyAdditional(
            currentData as DailyPriceTypes[],
            stockCode,
            timeFrame,
          )
        : fetchAdditionalData(currentData as MinPriceTypes[], stockCode);
    },
    onSuccess: (newData) => {
      queryClient.setQueryData(
        isDay
          ? ['dailyStockData', stockCode, timeFrame]
          : ['minStockData', stockCode],
        (oldData: any) => [...(oldData || []), ...newData],
      );
    },
  });

  return {
    data: data || [],
    isLoading,
    isError,
    fetchAdditionalData: additionalDataMutation.mutate,
    isFetchingAdditionalData: additionalDataMutation.isPending,
    additionalDataError: additionalDataMutation.error,
  };
};

export const useInvalidateStockData = () => {
  const queryClient = useQueryClient();

  return {
    invalidateDailyData: (stockCode: string) =>
      queryClient.invalidateQueries({
        queryKey: ['dailyStockData', stockCode],
      }),
    invalidateMinData: (stockCode: string) =>
      queryClient.invalidateQueries({
        queryKey: ['minStockData', stockCode],
      }),
  };
};
