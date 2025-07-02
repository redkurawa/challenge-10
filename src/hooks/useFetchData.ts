import axios from 'axios';
import { useEffect, useState } from 'react';

interface ApiResponse<T> {
  data: T;
  total?: number;
}

export function useFetchData<T>(
  endpoint: string,
  skip = false
): {
  data: T | null;
  total: number | null;
  loading: boolean;
  error: Error | null;
} {
  const [data, setData] = useState<T | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (skip) return;

    const controller = new AbortController();

    async function fetchData() {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
        const fullUrl = `${baseUrl}${endpoint}`;

        // console.log('[FETCH]', fullUrl);

        const response = await axios.get<ApiResponse<T>>(fullUrl, {
          signal: controller.signal,
        });

        // console.log('[RESPONSE]', response.data);

        const result =
          'data' in response.data ? response.data.data : response.data;
        setData(result);

        if ('total' in response.data) {
          setTotal(response.data.total ?? null);
        }
      } catch (err: unknown) {
        if (axios.isCancel(err)) return;
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => controller.abort();
  }, [endpoint, skip]);

  return { data, total, loading, error };
}
