// Classes
class MyClass{
    myMethod(){
        console.log('Class:::', this)
    }
}
const myInstance = new MyClass();
//myInstance.myMethod();

//Instance
const myObj = {
    myMethod() {
        console.log('Object:::', this)
    }
}
//myObj.myMethod();

// Function
function myFunction(...text: string[]) {
    console.log('Function:::', this, text)   
}
const bindFunction = myFunction.bind(myObj)
bindFunction('ABC', 'DEF')
bindFunction('123', '456')
myFunction.call(myObj, 'ABC', 'DEF')
myFunction.apply(myObj, ['ABC', 'DEF']);
