import { useMutation, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";
import todoServices from "../services/todoServices";
import { todosKeys } from "./query-keys";

export function useTodosUpdate() {
    const queryClient = useQueryClient();

    const todoMutation = useMutation({
        mutationFn: todoServices.updateTodo,
        mutationKey: todosKeys.update(),
        onSuccess: ({data}) => {
            // queryClient.invalidateQueries(todosKeys.all())
            queryClient.setQueryData(todosKeys.all(), (oldTodos) => {
                return oldTodos.map(todo => todo.id === data.id ? data : todo)
            })
        },
    })

    return todoMutation;
}