
// Addition

console.log(6 + 9); // should return 15
console.log('Hello' + 'World'); // should return HelloWorld

// Subtraction, Multiplication, Division

console.log(9 - 3); // Should return 6
console.log(8 * 2); // Should return 16
console.log(9 / 3); // Should return 3

// Modulus/Division Remainder

console.log(7 % 2); // Should return 1
console.log(6 % 2); //Should return 0 (no remainder)

// Division remainder in a function to check if variable value is even

function isEven(x){
      return x % 2 === 0;
    }
    // returns true when x is even:
    console.log(isEven(4)); // true
    console.log(isEven(5)); // false
    console.log(isEven(6)); // true

// Division remainder in a function to check if variable value is odd

function isOdd(x){
      return x % 2 != 0;
    }
    // returns true when x is odd:
    console.log(isOdd(4)); // false
    console.log(isOdd(5)); // true
    console.log(isOdd(6)); // false

// Increment & Decrement

var a = 5;
 a++
console.log(a); // Should return 6
 a--
console.log(a); // Should return 5 (variable reassigned and turned into 6)


// Comparison operators

var nr = 3;
    nq = '3';
    console.log(nr == nq); // Should return true 
    console.log(nr === nq);  // Should return false


var tw = 5;
    tr = '5';
    console.log(tw != tr); // Should return false
    console.log(tw !== tr); // Should return true

var qu = 7;
    qa = '7';
    console.log(qu <= qa); // Should return true
    console.log(qu >= qa); // Should return true
    console.log(qu < qa); // Should return false
    console.log(qu > qa); // Should return false

// Assignment operators

var a1 = 1;
    b1 = 2;
    c1 = 3;
console.log(a1 = b1 + c1); // Should return 5 (a1 = b1 + c1)

var a2 = 1;
    b2 = 2;
    c2 = 3;
console.log(a2 += b2); // Should return 3 (a2 = a2 + b2)

var a3 = 1;
    b3 = 2;
    c3 = 3;
console.log(a3 -= b3); // Should return -1 (a3 = a3 - b3)

var a4 = 1;
    b4 = 2;
    c4 = 3;
console.log(a4 /= b4); // Should return 0.5 (a4 = a4 / b3)

var a5 = 1;
    b5 = 2;
    c5 = 3;
console.log(c5 %= b5); // Should return 1 (c5 = c5 % b5)

var a6 = 1;
    b6 = 2;
    c6 = 3;
console.log(a6 *= b6); // Should return 2 (a6 = a6 * b6)

// Logical (Boolean) operators

// Not

console.log(!true); // returns false
console.log(!false); // returns true
console.log(Boolean(0)); // returns false
console.log(!Boolean(0)) // returns true

// And

var at = 3;
    bt = 6;
    day1 = 'Monday';
    day2 = 'Tuesday';
    mt = 5;
    pt = 5;
    console.log(at > 0 && bt > 0); // Should return true
    console.log(at > 2 && bt > 7); // Should return false
    console.log(at == bt && day1 == day2); // Should return false
    console.log(mt == pt && at == bt); // Should return false

// Or

console.log(at > 2 || mt > 6); // Should return true
console.log(mt > 6 || bt < 3); // Should return false
console.log(at !== bt || mt !== pt); //Should return true

// Prefix and postfix

var level = 9;
var preLevel = --level
console.log(preLevel); // Should return 8

var levels = 9
var preLevels = levels--
console.log(preLevels); // Should return a 9