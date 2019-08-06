//With partial mapped type
interface Person {
    name: string
    age: number
}

type MyPartial<T> = {
    //makes parameters optional
    [P in keyof T]?: T[P]
}

//to update a person
function updatePerson(person: Person, prop: MyPartial<Person>){
    return {...person, ...prop}
}

const person: Person = {
    name: 'Todd',
    age: 27
}

updatePerson(person, {name: 'ABC'})
