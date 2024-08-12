import Task from '../entity/TaskInterface'
import { Priorities, Statuses } from '../enums/TaskEnum'
import { v4 } from 'uuid'

class TaskManager {
    private tasks: Map<string, Task> = new Map()

    createTask(
        title: string,
        description: string,
        priority: Priorities,
        dueDate: Date,
        status: Statuses
    ): Task {
        const id = v4()
        const newTask: Task = {
            id,
            title,
            description,
            priority,
            dueDate,
            status
        }
        this.tasks.set(id, newTask)
        return newTask
    }

    updateTask(id: string, updates: Partial<Task>): Task | undefined {
        const task = this.tasks.get(id)
        if (task) {
            const updateTask = { ...task, ...updates }
            this.tasks.set(id, updateTask)
            return updateTask
        }
        return
    }

    removeTask(id: string): void {
        this.tasks.delete(id)
    }

    getAllTasks(): Task[] {
        return Array.from(this.tasks.values())
    }
}

export default TaskManager
