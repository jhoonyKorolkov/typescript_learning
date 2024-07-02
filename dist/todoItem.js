"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
class TodoItem {
    id;
    task;
    complete = false;
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails() {
        console.log(`ID: ${this.id} Task: ${this.task} Complete: ${this.complete} ? "\t(complete)": ""`);
    }
}
exports.TodoItem = TodoItem;
