import { useQuery, useMutation } from '@tanstack/react-query';
import { getAllBooks, getBookCategory } from '../services/api';

const key = 'Books';

export function useCategory(category: any) {
  return useQuery([key, category], () => getBookCategory(category), {
    suspense: true,
  });
}