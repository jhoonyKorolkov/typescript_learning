"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TaskEnum_1 = require("../enums/TaskEnum");
class TaskManager {
    constructor() {
        this.title = '';
        this.priority = TaskEnum_1.Priorities.Low;
        this.status = TaskEnum_1.Statuses.InProgress;
        this.id = Math.random().toFixed(2);
    }
    createTask() { }
}
exports.default = TaskManager;
