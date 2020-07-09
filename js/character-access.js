var character = "Javascript"
character[0]; //first character
character[1]; //second character
character[2]; //third character
// Displays 's'
console.log(character[4]);
  
var firstName = "Charles";
var lastChar = firstName[firstName.length - 1];
// Displays "s"
console.log(lastChar);


var thirdToLastChar = firstName[firstName.length - 3];
// Displays 'l'
console.log(thirdToLastChar); 

var str = "HELLO WORLD";
var res = str.charAt(0)
// Displays 'H'
console.log(res);
  
var anyString = 'Mozilla';
// Displays 'Mozil'
console.log(anyString.substring(0, 5));
console.log(anyString.substring(5, 0));
  
// Character access in a function

function skipFirstCharacter(name){
    return name.substring(1);
  }
//sample usage
console.log(skipFirstCharacter("Iamsterdam"));