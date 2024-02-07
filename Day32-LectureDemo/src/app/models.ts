export interface Task {
    task: string
    priority: number
    completed: boolean
}

export interface Todo {
    // Use the exact same names in the todoForm you created, easier this way.
    title: string
    email: string
    completedBy: string
    comments: string
    tasks: Task[]
}