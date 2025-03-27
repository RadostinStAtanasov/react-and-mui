import { useQuery } from '@tanstack/react-query'
import { todosKeys } from './query-keys';
import todoServices from '../services/todoServices';



export default function useGetTodos() {
        const todosQuery = useQuery({
          queryKey: todosKeys.all(),
          queryFn: todoServices.getAll,
          staleTime: 10 * 1000,
          retry: 0,
        });

        return todosQuery;
}