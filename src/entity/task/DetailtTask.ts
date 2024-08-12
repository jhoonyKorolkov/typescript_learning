import BaseTask from './Task'

export default interface DetailTask extends BaseTask {
    description: string
    dueDate: Date
}
