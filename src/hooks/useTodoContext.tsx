import { useContext } from "react";
import { TodoContext } from "../context/todoContext";

export const useTodoContext = () => {
    const context = useContext(TodoContext);
    if (context === undefined) {
        throw new Error(
            "useTodo must be used within a TodoProvider"
        );
    }
    return context;
}