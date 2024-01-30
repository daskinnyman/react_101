import { useState } from 'react'
import { Container, Paper } from '@mui/material';
import { Todo, todos } from './mock/mock-todo';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import './App.css';

function App() {
  const [todo, setTodo] = useState<Todo[]>([...todos])

  const handleSaveClick = (input: string) => {
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
  }

  const handleCheckChange = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(prev => prev.map(todo => todo.id === id ? { ...todo, completed: e.target.checked } : todo));
  }

  const handleDeleteClick = (id: number) => {
    setTodo(prev =>
      prev.filter(todo => todo.id !== id)
    )
  }

  return (
    <Container>
      <Paper>
        <TodoInput onSave={handleSaveClick} />
        <TodoList todo={todo} onDelete={handleDeleteClick} onCheckChange={handleCheckChange} />
      </Paper>
    </Container>
  )
}

export default App
