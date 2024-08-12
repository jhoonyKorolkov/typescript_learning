"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TaskEnum_1 = require("./enums/TaskEnum");
const TaskManager_1 = __importDefault(require("./services/TaskManager"));
const taskManager = new TaskManager_1.default();
const newTask = taskManager.createTask('hello', 'how are you', TaskEnum_1.Priorities.High, new Date('2024-08-18'), TaskEnum_1.Statuses.Pending);
const allTasks = taskManager.getAllTasks();
const updateTask = taskManager.updateTask('98e93c7f-b39c-4ece-940c-d31cf91460f8', { status: TaskEnum_1.Statuses.Completed, title: 'norm' });
console.log(updateTask);
