import { PropsWithChildren, createContext, useCallback, useState } from "react";
import { Todo, todos } from "../mock/mock-todo";


type TodoContextType = {
    todos: Todo[],
    addTodo?: (title: string) => void,
    deleteTodo?: (id: number) => void,
    toggleTodo?: (id: number, e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TodoContext = createContext<TodoContextType>({
    todos: [],
});

export const TodoProvider = ({ children }: PropsWithChildren) => {
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

    const value = {
        todos: todo,
        addTodo: handleSaveClick,
        deleteTodo: handleDeleteClick,
        toggleTodo: handleCheckChange
    }



    return <TodoContext.Provider value={value}>
        {children}
    </TodoContext.Provider>
}