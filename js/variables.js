
var name = 'Bob';
var age = 28;
var rating = 4.5;
var isCool = true;
var x = null;
var y = undefined;
var z;
var myArray = [0,1,4,5];

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(typeof myArray);



// Null and undefined

var book;        
console.log(book);          // => undefined
console.log(typeof book);   // => undefined 

var book = null;  
console.log(book);          // => null
console.log(typeof book);   // => object  (although null is not a true object)


// Incrementation

var myVar = 87;
    myVar++;
    console.log(myVar);

// Decrementation

var myVar2 = 87;
    myVar2--;
    console.log(myVar2);

// Conversion of number to string

var nr = 15
nr.toString();
console.log(nr.toString());


function convertNumberToString(number){
    return number.toString();
  }
  console.log(convertNumberToString(11));

// Conversion of string to number

function convertToInteger(str) {
    return parseInt(str);
}
// should return a number
console.log(convertToInteger("56"));
// should return 56
console.log(convertToInteger("56"));
// should return 77
console.log(convertToInteger("77"));
// should return NaN
console.log(convertToInteger("JamesBond"));


// Using the object "number"

function convertStringToNumber(string){
    return Number.parseInt(string);
  }
  console.log(convertStringToNumber("97"));