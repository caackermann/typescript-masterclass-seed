// Function
function myFunction() {
    console.log('Function:::',this)   
}
myFunction()
// Classes
class MyClass{
    myMethod(){
        console.log('Class:::', this)
    }
}
const myInstance = new MyClass();
myInstance.myMethod();