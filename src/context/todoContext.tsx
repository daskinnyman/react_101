import { createContext } from "react";
import { Todo } from "../mock/mock-todo";


type TodoContextType = {
    todos: Todo[],
    addTodo?: (title: string) => void,
    deleteTodo?: (id: number) => void,
    toggleTodo?: (id: number, e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TodoContext = createContext<TodoContextType>({
    todos: [],
});