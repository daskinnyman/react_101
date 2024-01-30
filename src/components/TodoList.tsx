import { List, Typography } from "@mui/material"
import { TodoListItem } from "./TodoListItem"
import { useContext } from "react"
import { TodoContext } from "../context/todoContext"

export const TodoList = () => {
    const { todos } = useContext(TodoContext)

    function renderTodos() {
        if (todos.length === 0) {
            return <Typography fontSize={12} color={"#717171"} sx={{my:2}}>🎉 Hurray! You have no todos today!</Typography>
        }
        return todos.map(todo => <TodoListItem todo={todo} />)
    }

    return <List>
        {renderTodos()}
    </List>
}