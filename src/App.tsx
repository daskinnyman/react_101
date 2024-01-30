import { Container, Paper } from '@mui/material';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import './App.css';
import { TodoProvider } from './context/todoContext';

function App() {
  console.log("app rendered")
  return (
    <TodoProvider>
      <Container>
        <Paper>
          <TodoInput />
          <TodoList />
        </Paper>
      </Container>
    </TodoProvider>
  )
}

export default App
