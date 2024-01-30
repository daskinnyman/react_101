export type Todo = {
    id: number;
    title: string;
    completed: boolean;
};


export const todos: Todo[] = [
    {
        id: 0,
        title: 'Learn React',
        completed: false
    },
    {
        id: 1,
        title: 'Eat Lunch',
        completed: false
    },
    {
        id: 2,
        title: 'Take a Nap',
        completed: false
    }
];