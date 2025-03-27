import { useQuery } from "@tanstack/react-query";
import { todosKeys } from "./query-keys";
import todoServices from "../services/todoServices";

export function useGetTodo(todoId) {
    const todoQuery = useQuery({
        queryKey: todosKeys.one(todoId),
        queryFn: () =>  todoServices.getOne(todoId),
    });

    return todoQuery;
}