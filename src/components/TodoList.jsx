import * as React from 'react';

import List from '@mui/material/List';
import useGetTodos from '../queries/useGetTodos';

import TodoListItem from './TodoListItem';
import { useTodosUpdate } from '../queries/useTodosUpdate';



export default function TodoList() {
  const todosQuery = useGetTodos();
  const todoMutation = useTodosUpdate();

  const todoClickHandle = (todo) => {
      const updatedTodo = {...todo, completed: !todo.completed};

      todoMutation.mutate(updatedTodo);
  };


  return (
    <>

        {todosQuery.isError 
          ? <div>Failed to load todos</div>
          : todosQuery.isFetching
            ? <div>Loading todos...</div>
            : (
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {todosQuery.data.map((todo) => 
                <TodoListItem
                  key={todo.id}
                  todo={todo}
                  clickHandle={todoClickHandle}
                /> 
                )}
            </List>
            )
        } 
    </>
  );
}