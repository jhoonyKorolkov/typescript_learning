function calculateTax(amount, discount = 0, ...extraFees) {
    return (
        amount * 1.2 -
        discount +
        extraFees.reduce((total, val) => total + val, 0)
    )
}
const taxValue = calculateTax(1, 0)
console.log(`Tax value: ${taxValue}`)
const test = {
    name: 'dsd',
    age: 2,
    eat: ['grass']
}
class Cat {
    name
    constructor(name) {
        this.name = name
    }
}
class Dog {
    name
    constructor(name) {
        this.name = name
    }
}
new Cat('ni')
new Dog('ni')
console.log(test)
//# sourceMappingURL=index.js.map
