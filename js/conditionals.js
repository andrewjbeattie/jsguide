// if statement

function test (myCondition) {
if (myCondition) {
  return "It was true";
  }
return "It was false";
}
test(true);  // returns "It was true"
test(false); // returns "It was false"
console.log(test(true)); // Prints true
console.log(test(false)); // Prints false

// if...else statement

function myFunction(num) {
if (num > 10) {
  return "Bigger than 10";
  } else {
  return "10 or Less";
  }
}
console.log(myFunction(15));

// if…else if…else statement

function myFunction2(num2){
if (num2 > 15) {
  return "Bigger than 15";
} else if (num2 < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
  }
}
  console.log(myFunction2(10));

//  switch statement

var account = 3; 
switch (account) {
  case 1:
    console.log("Checking account");
    break;
  case 2:
    console.log("Savings account");
    break; 
  case 3 :
    console.log("Business account");   //  3 = Business account 
    break;
  default:
    console.log("Invalid account code");
    break;
}

// Multiple identical options in switch statements

var val = 3;
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    console.log(result);
    break;
  case 4:
    result = "4 alone";
    console.log(result);
}


// Conditional (Ternary) Operator

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}
console.log(findGreater(1,2));

// Multiple Conditional (Ternary) Operators

function findGreaterOrEqual(a, b) {
return (a === b) ? "a and b are equal" 
  : (a > b) ? "a is greater" 
  : "b is greater";
}
console.log(findGreaterOrEqual(1,2));