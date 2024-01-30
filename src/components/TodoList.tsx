import { List, Typography } from "@mui/material"
import { TodoListItem } from "./TodoListItem"
import { useTodoContext } from "../hooks/useTodoContext"

export const TodoList = () => {
    const { state } = useTodoContext();

    function renderTodos() {
        if (state.todos.length === 0) {
            return <Typography fontSize={12} color={"#717171"} sx={{ my: 2 }}>🎉 Hurray! You have no todos today!</Typography>
        }
        return state.todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)
    }

    return <List>
        {renderTodos()}
    </List>
}