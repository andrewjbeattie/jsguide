/* Concatenation, in the context of programming, is the operation of joining 
two strings together. The term"concatenation" literally means to merge two 
things together. Also known as string concatenation. */

const firstname = 'John';
const realage = 30;

// Concatentation - Old way

console.log('My name is ' + firstname +  ' and I am ' + realage);

// String concatenation - can use backticks and just use dollar sign and curly braces

console.log(`My name is ${firstname} and I am ${realage}`)

// String concatenation - can assign template string to another variable

const hello = `My name is ${firstname} and I am ${realage}`
console.log(hello);


var ourStr = "I come first. ";
    ourStr += "I come second.";
// ourStr is now "I come first. I come second."
console.log(ourStr);


var myName = "John Smith";
var ourStr = "Hello, my name is " + myName + ", how are you?";
// ourStr is now "Hello, my name is John Smith, how are you?"
console.log(ourStr)



function sayHello(firstname){
    return `Hello ${firstname}`;
}

//sample usage
console.log(sayHello("John"));


function getFullName(firstName, lastName){
    return `${firstName} ${lastName}`;
}

//sample usage
console.log(getFullName("John", "Doe"));


function getMultilineString() {
    //move "are so powerful!" to a new line in the same string
    return `Template strings  
are so powerful!`;
}

//sample usage
console.log(getMultilineString());
