import { Priorities, Statuses } from './enums/TaskEnum'
import TaskManager from './services/TaskManager'

const taskManager = new TaskManager()

const newTask = taskManager.createTask(
    'hello',
    'how are you',
    Priorities.High,
    new Date('2024-08-18'),
    Statuses.Pending
)

const allTasks = taskManager.getAllTasks()

const updateTask = taskManager.updateTask(
    '98e93c7f-b39c-4ece-940c-d31cf91460f8',
    { status: Statuses.Completed, title: 'norm' }
)

console.log(updateTask)
