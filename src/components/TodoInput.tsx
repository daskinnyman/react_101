import { Box, TextField, Button } from "@mui/material"
import { useState } from "react"

type TodoInputProps = {
    onSave: (input:string) => void
}


export const TodoInput = ({onSave}:TodoInputProps) => {
    const [input, setInput] = useState<string>("")

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleSaveClick = () => {
        if (!input) {
            return
        }

        onSave(input);
        setInput("");
    }

    return <Box p={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <TextField id="outlined-basic" size="small" label="To-do" variant="standard" value={input} onChange={handleInputChange} />
        <Button variant="text" sx={{ ml: 2 }} onClick={handleSaveClick}>Save</Button>
    </Box>
}