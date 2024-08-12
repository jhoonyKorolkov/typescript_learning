import Task from '../entity/TaskInterface'
import { Priorities, Statuses } from '../enums/TaskEnum'

class TaskManager implements Task {
    id: string
    title: string
    description?: string
    priority: Priorities
    dueData?: Date
    status: Statuses

    constructor() {
        this.title = ''
        this.priority = Priorities.Low
        this.status = Statuses.InProgress
        this.id = Math.random().toFixed(2)
    }
    createTask() {}
}

export default TaskManager
