const person = {
    name: 'Todd',
    age: 27
}
type Person = typeof person
//In JavaScript, typeof person = 'object'
const anotherPerson: Person = {
    name: 'John',
    age: 30,
}