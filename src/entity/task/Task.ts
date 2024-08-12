import { Priorities, Statuses } from '../../enums/TaskEnum'

interface BaseTask {
    id?: string
    title: string
    priority: Priorities
    status: Statuses
}

export default BaseTask
