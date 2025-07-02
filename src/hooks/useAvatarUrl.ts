import { useFetchData } from '@/hooks/useFetchData';
import { UserInterface } from '@/interfaces/interface';

export const useAvatarUrl = (userId?: number) => {
  const { data, loading, error } = useFetchData<UserInterface>(
    userId ? `/users/${userId}` : ''
  );

  return {
    avatarSrc: data?.avatarUrl,
    isLoading: loading,
    error,
  };
};
