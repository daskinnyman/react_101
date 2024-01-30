import { List } from "@mui/material"
import { TodoListItem } from "./TodoListItem"
import { Todo } from "../mock/mock-todo"

type TodoListProps = {
    todo: Todo[],
    onDelete: (id: number) => void,
    onCheckChange: (id: number, e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TodoList = ({ todo, onDelete, onCheckChange }: TodoListProps) => {

    const handleDeleteClick = (id: number) => {
        if (!onDelete) {
            return
        }

        onDelete(id);
    }

    const handleCheckChange = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
        if (!onCheckChange) {
            return
        }

        onCheckChange(id, e);
    }

    function renderTodos() {
        return todo.map(todo => <TodoListItem todo={todo} onDelete={handleDeleteClick} onCheckChange={handleCheckChange} />)
    }

    return <List>
        {renderTodos()}
    </List>
}