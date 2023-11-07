import { useQuery } from '@tanstack/react-query';
import customFetch from './utils';
customFetch;
export const useFetchTasks = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => customFetch.get('/'),
  });
  return { isLoading, data, error };
};
