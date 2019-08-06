//Without partial mapped type
interface Person {
    name: string
    age: number
}

interface PartialPerson {
    //optional properties
    name?: string,
    age?: number
}

//to update a person
function updatePerson(person: Person, prop: PartialPerson){
    return {...person, ...prop}
}

const person: Person = {
    name: 'Todd',
    age: 27
}

updatePerson(person, {name: 'ABC'})
