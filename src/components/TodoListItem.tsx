import { ListItem, IconButton, ListItemButton, ListItemIcon, Checkbox, ListItemText } from "@mui/material";
import { Todo } from "../mock/mock-todo";
import DeleteIcon from '@mui/icons-material/Delete';
import { useTodoContext } from "../hooks/useTodoContext";
import { TodoActionType } from "../context/todoContext";

type TodoListItemProps = {
    todo: Todo
};

export const TodoListItem = ({ todo }: TodoListItemProps) => {
    const { dispatch } = useTodoContext();

    const handleDeleteClick = (id: number) => {
        dispatch({ type: TodoActionType.DELETE_TODO, payload: { id } })
    }

    const handleCheckChange = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const completed = e.target.checked;
        dispatch({ type: TodoActionType.TOGGLE_TODO, payload: { id, completed } })
    }

    return <ListItem
        secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteClick(todo.id)}>
                <DeleteIcon />
            </IconButton>
        }
    >
        <ListItemButton dense>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={todo.completed}
                    tabIndex={-1}
                    disableRipple
                    onChange={(e) => handleCheckChange(todo.id, e)}
                    inputProps={{ 'aria-labelledby': "labelId" }}
                />
            </ListItemIcon>
            <ListItemText sx={{ fontSize: 14 }} color="text.secondary">
                {todo.title}
            </ListItemText>
        </ListItemButton>
    </ListItem>
}