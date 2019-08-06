interface Person {
    name: string
    age: number
}

interface ReadonlyPerson {
    readonly name: string
    readonly age: number
}

const person: Person = {
    name: 'Todd',
    age: 27
}

//To make person immutable
//This will return a readonly version of the person
function freezePerson(person: Person): ReadonlyPerson {
    return Object.freeze(person)
}

const newPerson = freezePerson(person)

//refactoring the above function
function freeze<T>(obj: T): Readonly<T> {
    return Object.freeze(obj)
}
const newerPerson = freeze(person)

type MyReadonly <T> = {
    readonly[P in keyof T] : T[P] //will map over all the properties and mark them readonly
}
function freeze2<T>(obj: T): MyReadonly<T> {
    return Object.freeze(obj)
}

const newestPerson = freeze2(person)
newPerson.age = 10000