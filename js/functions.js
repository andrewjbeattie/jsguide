// Basic Function

function functionName() {
  console.log("Hello World");
}
console.log(functionName()); // Prints function "Hello World"

// Sum function with arithmetic expression

function sum(x, y, z,) {
  return x + y + z;
}
sum(5,4,5);
console.log(sum(5,4,5)); // Print sum = 14

// Sum function with arguments

function  functionWithArgs(x, y) {
  console.log(x + y)
}
functionWithArgs(1,2);
functionWithArgs(7,9);
console.log(functionWithArgs(1,2)); // Prints 3
console.log(functionWithArgs(7,9)); //Prints 16

// Global Scope and Local Scope Functions

var num = 1;          // variable is global
function showGlobal() {
console.log(num);         // uses the global num
}
showGlobal();         // => 1

function showLocal(){
var num = 2;        // num is local, hides the global num 
console.log(num);
}
showLocal();           // => 2

function showArgument(num) {
console.log(num);       // arguments are locally scoped
}
showArgument(5);      // => 5

// Returning a value

function plusThree(num) {
  return num + 3;
  }
  var answer = plusThree(5); // 8
  console.log(answer);

// Assignment with a Returned Value

var processed = 0;
function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7); // Should equal 2
console.log(processed); // Equals 2

