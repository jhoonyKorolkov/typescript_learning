"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function authorize(role) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(...args);
            if (this.userRole !== role) {
                throw new Error(`Access denied: ${this.userRole} does not have access to ${propertyKey}`);
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
exports.default = authorize;
