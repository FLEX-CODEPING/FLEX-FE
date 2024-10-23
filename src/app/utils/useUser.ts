import { useUserStore } from "../store/scoreStore";

export function useUser() {
  const { user, isLoading, error } = useUserStore();
  return { user, isLoading, error };
}
