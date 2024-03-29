import { Box, TextField, Button } from "@mui/material"
import { useState } from "react"
import { useTodoContext } from "../hooks/useTodoContext";
import { TodoActionType } from "../context/todoContext";

export const TodoInput = () => {
    const { dispatch, state } = useTodoContext();
    const [input, setInput] = useState<string>("")

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleSaveClick = () => {
        if (!input) {
            return
        }

        const lastTodo = state.todos[state.todos.length - 1];
        const newId = (lastTodo ? lastTodo.id : 0) + 1
        const newTodo = {
            id: newId,
            title: input,
            completed: false
        }


        dispatch({ type: TodoActionType.ADD_TODO, payload: newTodo })
        setInput("");
    }

    return <Box p={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <TextField id="outlined-basic" size="small" label="To-do" variant="standard" value={input} onChange={handleInputChange} />
        <Button variant="text" sx={{ ml: 2 }} onClick={handleSaveClick}>Save</Button>
    </Box>
}