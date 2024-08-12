function authorize(role: string) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value
        descriptor.value = function (...args: any[]) {
            console.log(...args)

            if (this.userRole !== role) {
                throw new Error(
                    `Access denied: ${this.userRole} does not have access to ${propertyKey}`
                )
            }
            return originalMethod.apply(this, args)
        }
        return descriptor
    }
}

export default authorize
