"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const authorize_1 = __importDefault(require("../decorators/authorize"));
class TaskManager {
    constructor(userRole) {
        this.tasks = new Map();
        this.userRole = userRole;
    }
    createTask(task) {
        const id = (0, uuid_1.v4)();
        const taskWithId = Object.assign(Object.assign({}, task), { id });
        this.tasks.set(id, taskWithId);
        return taskWithId;
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
__decorate([
    (0, authorize_1.default)('admin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], TaskManager.prototype, "createTask", null);
__decorate([
    (0, authorize_1.default)('admin'),
    (0, authorize_1.default)('user'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Object)
], TaskManager.prototype, "updateTask", null);
__decorate([
    (0, authorize_1.default)('admin'),
    (0, authorize_1.default)('user'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TaskManager.prototype, "removeTask", null);
exports.default = TaskManager;
