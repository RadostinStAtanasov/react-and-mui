import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { useTodosQuery } from '../queries/useTodosQuery';



export default function TodoList() {
  const todosQuery = useTodosQuery();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  if (todosQuery.isError) {
    return <h2>{todosQuery.error.message}</h2>
  }


  return (
    <>

        {todosQuery.isError 
          ? <div>Failed to load todos</div>
          : todosQuery.isFetching
            ? <div>Loading todos...</div>
            : (
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {todosQuery.data.map((todo) => {
                const labelId = `checkbox-list-label-${todo.todo}`;
                
                return (
                  <ListItem
                  key={todo.id}
                  secondaryAction={
                    <IconButton edge="end" aria-label="comments">
                        <CommentIcon />
                      </IconButton>
                    }
                    disablePadding
                    >
                    <ListItemButton role={undefined} onClick={handleToggle(todo.id)} dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={checked.includes(todo.id)}
                          tabIndex={-1}
                          disableRipple
                          />
                      </ListItemIcon>
                      <ListItemText id={labelId} style={{color: "black"}} primary={`Line item ${todo.todo}`} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
            )
        } 
    </>
  );
}