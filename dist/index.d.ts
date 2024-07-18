declare function calculateTax(
    amount: number,
    discount?: number,
    ...extraFees: number[]
): number
declare const taxValue: number
interface Animal {
    name: string
    age: number
    eat: [string, number?]
}
declare const test: Animal
declare class Cat {
    name: string
    constructor(name: string)
}
declare class Dog {
    name: string
    constructor(name: string)
}
