import { useCallback, useState } from 'react'
import { Container, Paper } from '@mui/material';
import { Todo, todos } from './mock/mock-todo';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import './App.css';
import { TodoContext } from './context/todoContext';

function App() {
  const [todo, setTodo] = useState<Todo[]>([...todos])

  const handleSaveClick = useCallback((input: string) => {
    if (!input) {
      return
    }
    const lastTodo = todo[todo.length - 1];
    const newId = (lastTodo ? lastTodo.id : 0) + 1
    const newTodo = {
      id: newId,
      title: input,
      completed: false
    }
    setTodo(prev => [...prev, newTodo])
  }, [todo])

  const handleCheckChange = useCallback((id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(prev => prev.map(todo => todo.id === id ? { ...todo, completed: e.target.checked } : todo));
  }, [])

  const handleDeleteClick = useCallback((id: number) => {
    setTodo(prev =>
      prev.filter(todo => todo.id !== id)
    )
  }, [])

  return (
    <TodoContext.Provider value={{
      todos: todo,
      addTodo: handleSaveClick,
      deleteTodo: handleDeleteClick,
      toggleTodo: handleCheckChange
    }}>
      <Container>
        <Paper>
          <TodoInput />
          <TodoList />
        </Paper>
      </Container>
    </TodoContext.Provider>
  )
}

export default App
