import { PropsWithChildren, Reducer, createContext, useMemo, useReducer } from "react";
import { Todo, todos } from "../mock/mock-todo";


type TodoContextType = {
    state: TodoState,
    dispatch: React.Dispatch<TodoAction>
}

const INITIAL_STATE: TodoState = {
    todos: [...todos],
};

export const TodoContext = createContext<TodoContextType>({
    state: INITIAL_STATE,
    dispatch: () => null
});

export enum TodoActionType {
    ADD_TODO = "ADD_TODO",
    DELETE_TODO = "DELETE_TODO",
    TOGGLE_TODO = "TOGGLE_TODO"
}

type TodoAction = {
    type: TodoActionType.ADD_TODO,
    payload: Todo
} | { type: TodoActionType.DELETE_TODO, payload: { id: number } }
    | { type: TodoActionType.TOGGLE_TODO, payload: { id: number, completed: boolean } }

type TodoState = {
    todos: Todo[]
}



const todoReducer: Reducer<TodoState, TodoAction> = (state: TodoState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionType.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case TodoActionType.DELETE_TODO:
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload.id) }
        case TodoActionType.TOGGLE_TODO:
            return { ...state, todos: state.todos.map(todo => todo.id === action.payload.id ? { ...todo, completed: action.payload.completed } : todo) };
        default:
            // @ts-expect-error - this is a deliberate error to show that we have handled all cases
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export const TodoProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE);

    const value = useMemo(() => {
        return { state, dispatch }
    }, [state, dispatch]);

    return <TodoContext.Provider value={value}>
        {children}
    </TodoContext.Provider>
}