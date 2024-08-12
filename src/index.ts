import { Priorities, Statuses } from './enums/TaskEnum'
import TaskManager from './services/TaskManager'
import DetailTask from './entity/task/DetailtTask'
import NoteTask from './entity/task/NoteTask'

const detailedTaskManager = new TaskManager<DetailTask>('admin')
const noteTaskManager = new TaskManager<NoteTask>('admin')

const newTask = detailedTaskManager.createTask({
    title: 'Finish TypeScript project',
    description: 'Complete all features',
    priority: Priorities.High,
    status: Statuses.InProgress,
    dueDate: new Date('2024-08-20')
})

const newTaskNote = noteTaskManager.createTask({
    title: 'Finish TypeScript project',
    note: 'Complete all features',
    page: 323,
    priority: Priorities.High,
    status: Statuses.InProgress
})

const all = detailedTaskManager.getAllTasks()
// console.log(all)

// console.log(newTask)
// console.log(newTaskNote)
