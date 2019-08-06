const person = {
    name: 'Todd',
    age: 27
}

//creates a new type for person
type Person = typeof person

//binding to another value
const anotherPerson: Person = {
    name: 'John',
    age: 30,
}

//In JavaScript, typeof person = 'object'
