import { useParams } from "react-router-dom";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Switch } from "@mui/material";
import { useGetTodo } from "../queries/useGetTodo";
import { useTodoUpdate } from "../queries/useTodoUpdate";


export default function TodoDetails() {
    const { todoId } = useParams();
    const todoQuery = useGetTodo(todoId);
    const updateTodo = useTodoUpdate(todoId);

    const todoClickHandler = () => {
       const updatedTodo =  { ...todoQuery.data, completed: !todoQuery.data.completed }
        console.log(updatedTodo);
        
       updateTodo.mutate(updatedTodo)
    }

    return(
        <>
        {todoQuery.isFetching 
        ? <div>Loading data...</div> 
        : (
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {todoQuery.data.todo}
                        
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <Switch 
                        checked={todoQuery.data.completed}
                        onClick={todoClickHandler}
                    />
                    </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
                </CardActions>
          </Card>
        )

        }
        </>
    );
}