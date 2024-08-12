"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statuses = exports.Priorities = void 0;
var Priorities;
(function (Priorities) {
    Priorities[Priorities["Low"] = 0] = "Low";
    Priorities[Priorities["Medium"] = 1] = "Medium";
    Priorities[Priorities["High"] = 2] = "High";
})(Priorities || (exports.Priorities = Priorities = {}));
var Statuses;
(function (Statuses) {
    Statuses[Statuses["Pending"] = 0] = "Pending";
    Statuses[Statuses["InProgress"] = 1] = "InProgress";
    Statuses[Statuses["Completed"] = 2] = "Completed";
})(Statuses || (exports.Statuses = Statuses = {}));
