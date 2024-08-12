"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User;
(function (User) {
    User[User["Admin"] = 0] = "Admin";
    User[User["User"] = 1] = "User";
    User[User["Guest"] = 2] = "Guest";
})(User || (User = {}));
exports.default = User;
