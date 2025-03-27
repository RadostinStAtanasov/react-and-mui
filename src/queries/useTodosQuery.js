import { useQuery } from '@tanstack/react-query'
import { todosKeys } from './query-keys';
import todoServices from '../services/todoServices';



export function useTodosQuery() {
        const todosQuery = useQuery({
          queryKey: todosKeys.all(),
          queryFn: todoServices.getTodos,
          staleTime: 1 * 60 * 1000,
          retry: 0,
        });

        return todosQuery;
}