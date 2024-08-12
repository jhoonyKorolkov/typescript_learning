import { Priorities, Statuses } from '../enums/TaskEnum'

interface Task {
    id: string
    title: string
    description?: string
    priority: Priorities
    dueDate?: Date
    status: Statuses
}

export default Task
