interface Person {
    name: string;
    age?: number;
}

type MyRequired<T> = {
    [P in keyof T]-?: T[P]
    //can use + or - to make parameters optonal or not
}

function printAge(person: MyRequired<Person>) {
    return `${person.name} is ${person.age}`;
}

const person: MyRequired<Person> = {
    name: 'Todd',
    age: 23
}
const age = printAge(person)