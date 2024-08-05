function calculateTax(
    amount: number,
    discount: number = 0,
    ...extraFees: number[]
) {
    return (
        amount * 1.2 -
        discount +
        extraFees.reduce((total, val) => total + val, 0)
    )
}
const taxValue = calculateTax(1, 0)
console.log(`Tax value: ${taxValue}`)

interface Animal {
    name: string
    age: number
    eat: [string, number?]
}

const test: Animal = {
    name: 'dsd',
    age: 2,
    eat: ['grass']
}

class Cat {
    name: string
    constructor(name: string) {
        this.name = name
    }
    getAge() {
        return 2
    }
}

class Dog {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

new Cat('ni')
new Dog('ni')

console.log(test)
