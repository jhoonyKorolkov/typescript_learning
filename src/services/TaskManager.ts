import BaseTask from '../entity/task/Task'
import { v4 } from 'uuid'
import authorize from '../decorators/authorize'

class TaskManager<T extends BaseTask> {
    private tasks: Map<string, T> = new Map()
    private userRole: string

    constructor(userRole: string) {
        this.userRole = userRole
    }

    @authorize('admin')
    createTask(task: Omit<T, 'id'>): T {
        const id = v4()
        const taskWithId = { ...task, id } as T
        this.tasks.set(id, taskWithId)
        return taskWithId
    }

    @authorize('admin')
    @authorize('user')
    updateTask(id: string, updates: Partial<T>): T | undefined {
        const task = this.tasks.get(id)
        if (task) {
            const updateTask = { ...task, ...updates } as T
            this.tasks.set(id, updateTask)
            return updateTask
        }
        return
    }

    @authorize('admin')
    @authorize('user')
    removeTask(id: string): void {
        this.tasks.delete(id)
    }

    getAllTasks(): T[] {
        return Array.from(this.tasks.values()) as T[]
    }
}

export default TaskManager
