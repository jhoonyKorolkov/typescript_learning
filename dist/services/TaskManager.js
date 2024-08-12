"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class TaskManager {
    constructor() {
        this.tasks = new Map();
    }
    createTask(title, description, priority, dueDate, status) {
        const id = (0, uuid_1.v4)();
        const newTask = {
            id,
            title,
            description,
            priority,
            dueDate,
            status
        };
        this.tasks.set(id, newTask);
        return newTask;
    }
    updateTask(id, updates) {
        const task = this.tasks.get(id);
        if (task) {
            const updateTask = Object.assign(Object.assign({}, task), updates);
            this.tasks.set(id, updateTask);
            return updateTask;
        }
        return;
    }
    removeTask(id) {
        this.tasks.delete(id);
    }
    getAllTasks() {
        return Array.from(this.tasks.values());
    }
}
exports.default = TaskManager;
