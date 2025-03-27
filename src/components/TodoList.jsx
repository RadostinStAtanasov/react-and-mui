import * as React from 'react';

import List from '@mui/material/List';
import { useTodosQuery } from '../queries/useTodosQuery';
import { useTodosUpdate } from '../queries/useTodosUpdate';
import TodoListItem from './TodoListItem';



export default function TodoList() {
  const todosQuery = useTodosQuery();
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