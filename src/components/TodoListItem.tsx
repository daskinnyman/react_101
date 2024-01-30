import { ListItem, IconButton, ListItemButton, ListItemIcon, Checkbox, ListItemText } from "@mui/material";
import { Todo } from "../mock/mock-todo";
import DeleteIcon from '@mui/icons-material/Delete';
import { useTodoContext } from "../hooks/useTodoContext";

type TodoListItemProps = {
    todo: Todo
};

export const TodoListItem = ({ todo }: TodoListItemProps) => {
    const { deleteTodo, toggleTodo } = useTodoContext();

    const handleDeleteClick = (id: number) => {
        if (!deleteTodo) {
            return
        }

        deleteTodo(id);
    }

    const handleCheckChange = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
        if (!toggleTodo) {
            return
        }
        const completed = e.target.checked;
        toggleTodo(id, completed);
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