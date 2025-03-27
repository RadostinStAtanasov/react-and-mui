import { useMutation, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";
import todoServices from "../services/todoServices";
import { todosKeys } from "./query-keys";

export function useTodoUpdate(todoId) {
    const queryClient = useQueryClient();

    const todoMutation = useMutation({
        mutationFn: todoServices.update,
        mutationKey: todosKeys.update(),
        onSuccess: ({data}) => {
            queryClient.setQueryData(todosKeys.one(todoId))
        },
    })

    return todoMutation;
}