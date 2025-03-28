import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

export default function TodoListItem({
    todo,
    clickHandle,
}) {

    const labelId = `checkbox-list-label-${todo.todo}`;
    
    
    return (
        <ListItem
            secondaryAction={
            <IconButton 
                edge="end" 
                aria-label="comments"
                LinkComponent={Link}
                to={`/todos/${todo.id}`}
                >
                <SettingsIcon />
            </IconButton>
            }
            disablePadding
            >
            <ListItemButton 
                onClick={() => clickHandle(todo)}
                >
                <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={todo.completed}
                    tabIndex={-1}
                    disableRipple
                    />
                </ListItemIcon>
                <ListItemText id={labelId} style={{color: "black"}} primary={`Line item ${todo.todo}`} />
            </ListItemButton>
        </ListItem>
    );
}