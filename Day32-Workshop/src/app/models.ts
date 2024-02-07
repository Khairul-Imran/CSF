export interface Todo {
    description: string,
    priority: string,
    dueDate: string
    completed: boolean
}

export interface Tasks {
    tasks: Todo[]
}