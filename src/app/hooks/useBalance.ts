import { callGet } from '@/app/utils/callApi';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const fetchBalance = async (): Promise<number> => {
  const response = await callGet('api/stocks/trade/balance');
  return response.result.balance;
};

export const useBalance = () => {
  return useQuery({ queryKey: ['balance'], queryFn: fetchBalance });
};

export const useInvalidateBalance = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: fetchBalance,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['balance'] });
    },
  });
};
