class MyClass {
    myMethod() {
        const foo = 123
        console.log('1', this)
        // a function creates new scope whereas an arrow function doesnt bind a "this" value
        setTimeout(() => {
            console.log('2', this)
        }, 0)
    }

}
const myInstance = new MyClass()
myInstance.myMethod()