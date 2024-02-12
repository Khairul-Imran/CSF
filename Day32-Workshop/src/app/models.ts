export interface Todo {
    description: string,
    priority: string,
    dueDate: string,
    completed: boolean
}

export interface Tasks {
    tasks: Todo[]
}

// Acts as the default todo, when form first initialises.
export const NO_TODO: Todo = {
    description: "",
    priority: "Medium",
    dueDate: "",
    completed: false
}