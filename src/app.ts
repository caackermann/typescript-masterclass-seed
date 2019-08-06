const person = {
    name: 'Todd',
    age: 27
}

type Person = typeof person

type PersonKeys = keyof Person //string literals of types

type PersonTypes = Person[PersonKeys] //allows us to have the values of the keys as their types
const anotherPerson: Person = {
    name: 'John',
    age: 30,
}

