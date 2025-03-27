import { CssBaseline } from "@mui/material"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useAuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { todosKeys } from "../queries/query-keys"

export default function CreateTodo() {
    const navigate = useNavigate();
    const { id: userId } = useAuthContext();
    const queryClient = useQueryClient();

    const createTodoMutation = useMutation({
        mutationFn: createTodo,
        mutationKey: todosKeys.create(),
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: todosKeys.all(),
                exact: true,
            });
        },
    });

    const formSubmitHandler = (e) => {
        e.preventDefault(e);
        const formData = new FormData(e.currentTarget);

        createTodoMutation.mutate({ title: formData.get('title'), userId });
        navigate('/todo')
    }

    return(
        <>
            <CssBaseline/>
            <form onSubmit={formSubmitHandler}>
            <TextField id="standard-basic" label="Title" variant="standard" name="title"/>
            <Button 
                type="submit" 
                variant="outlined"
                >
                Create
            </Button>
            </form>
        </>
    )
}

async function createTodo({title, userId}) {
    return await axios.post('https://dummyjson.com/todos/add', {
        todo: title,
        completed: false,
        userId,
    });
}