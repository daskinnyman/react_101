import { useState } from 'react'
import { Box, Button, Checkbox, Container, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, TextField, Typography } from '@mui/material';
import { Todo, todos } from './mock/mock-todo';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css'

function App() {
  const [input, setInput] = useState<string>("")
  const [todo, setTodo] = useState<Todo[]>([...todos])


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSaveClick = () => {
    if (!input) {
      return
    }

    const newId = (todo[todo.length - 1].id ?? 0) + 1
    const newTodo = {
      id: newId,
      title: input,
      completed: false
    }
    setTodo(prev => [...prev, newTodo])
    setInput("")
  }

  const handleCheckChange = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(prev => prev.map(todo => todo.id === id ? { ...todo, completed: e.target.checked } : todo));
  }

  const handleDeleteClick = (id: number) => {
    setTodo(prev =>
      prev.filter(todo => todo.id !== id)
    )
  }

  function renderTodos() {
    return todo.map(todo => <ListItem key={todo.id}
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
    </ListItem>)
  }

  return (
    <Container>
      <Paper>
        <Box p={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <TextField id="outlined-basic" size="small" label="To-do" variant="standard" value={input} onChange={handleInputChange} />
          <Button variant="text" sx={{ ml: 2 }} onClick={handleSaveClick}>Save</Button>
        </Box>
        <List>
          {renderTodos()}
        </List>
      </Paper>
    </Container>
  )
}

export default App
