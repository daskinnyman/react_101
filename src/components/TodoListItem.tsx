import { ListItem, IconButton, ListItemButton, ListItemIcon, Checkbox, ListItemText } from "@mui/material";
import { Todo } from "../mock/mock-todo";
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from "react";
import { TodoContext } from "../context/todoContext";

type TodoListItemProps = {
    todo: Todo
};

export const TodoListItem = ({ todo }: TodoListItemProps) => {
    const { deleteTodo, toggleTodo } = useContext(TodoContext);

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

        toggleTodo(id, e);
    }

    return <ListItem key={todo.id}
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