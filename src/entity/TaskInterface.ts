import { Priorities, Statuses } from '../enums/TaskEnum'

export default interface Task {
    title: string
    description?: string
    priority: Priorities
    dueData?: Date
    status: Statuses
}
