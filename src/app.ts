const person = {
    name: 'Todd',
    age: 27
}

type Person = typeof person
type PersonKeys = keyof Person 
type PersonTypes = Person[PersonKeys] 

//K is a subtype of our union type
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}


const personName = getProperty(person, 'name') //can get property of person using string literals

const anotherPerson: Person = {
    name: 'John',
    age: 30,
}

