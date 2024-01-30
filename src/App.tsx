import { useState } from 'react'
import { Box, Button, Checkbox, Container, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, TextField, Typography } from '@mui/material';
import { Todo, todos } from './mock/mock-todo';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css'

function App() {
  const [todo, setTodo] = useState<Todo[]>([...todos]);

  console.log('App re-render');

  function renderTodos() {
    return todo.map(todo => <ListItem key={todo.id}
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemButton role={undefined} onClick={() => { }} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={true}
            tabIndex={-1}
            disableRipple
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
          <TextField id="outlined-basic" size="small" label="To-do" variant="standard" />
          <Button variant="text" sx={{ ml: 2 }}>Save</Button>
        </Box>
        <List>
          {renderTodos()}
        </List>
      </Paper>
    </Container>
  )
}

export default App
