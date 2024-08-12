"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TaskEnum_1 = require("./enums/TaskEnum");
const TaskManager_1 = __importDefault(require("./services/TaskManager"));
const detailedTaskManager = new TaskManager_1.default('admin');
const noteTaskManager = new TaskManager_1.default('admin');
const newTask = detailedTaskManager.createTask({
    title: 'Finish TypeScript project',
    description: 'Complete all features',
    priority: TaskEnum_1.Priorities.High,
    status: TaskEnum_1.Statuses.InProgress,
    dueDate: new Date('2024-08-20')
});
const newTaskNote = noteTaskManager.createTask({
    title: 'Finish TypeScript project',
    note: 'Complete all features',
    page: 323,
    priority: TaskEnum_1.Priorities.High,
    status: TaskEnum_1.Statuses.InProgress
});
const all = detailedTaskManager.getAllTasks();
// console.log(all)
// console.log(newTask)
// console.log(newTaskNote)
