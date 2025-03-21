import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { colors } from '@mui/material';
import { Balance } from '@mui/icons-material';
import { red } from '@mui/material/colors';

export default function TodoList() {
    const [todos, setTodos] = useGetTodos();
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

  return (
    
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todos.map((todo) => {
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
  );
}

function useGetTodos() {
    const [todos, setTodos] = React.useState([]);
    
    React.useEffect(() => {

        (async () => {
            const response = await fetch('https://dummyjson.com/todos');
            
            const result = await response.json();
            
            setTodos(result.todos);
            
        })();
        
    });

    return [todos, setTodos];
}
