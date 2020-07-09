// Accessing Object Properties with Dot Notation

var myObj = {
    prop1: "val1",
    prop2: "val2"
  };
  var prop1val = myObj.prop1; // val1
  var prop2val = myObj.prop2; // val2
  console.log(myObj);

// Accessing Object Properties with Bracket Notation

var myObj = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
  };
  myObj["Space Name"]; // Kirk
  myObj['More Space']; // Spock
  myObj["NoSpace"];    // USS Enterprise

// Accessing Object Properties with Variables

var dogs = {
    Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
  };
  var myDog = "Hunter";
  var myBreed = dogs[myDog];
  console.log(myBreed); // "Doberman"

// Updating Object Properties

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
  ourDog["name"] = "Happy Camper"; // Replaces object's name property
  console.log(ourDog);

// Add New Properties to a JavaScript Object

var ourDogs = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
  
  ourDogs.bark = "bow-wow";
  console.log(ourDogs);

//  Delete Properties from a JavaScript Object

var ourDoggies = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
  };
  
  delete ourDoggies.bark;
  console.log(ourDoggies);

// Using Objects for Lookups

var alpha = {
    1:"Z",
    2:"Y",
    3:"X",
    4:"W",
    5:"V",
    6:"U",
    7:"T"
  };
  alpha[2]; // "Y"
  alpha[7]; // "T"
  
  var value = 2;
  console.log(alpha[value]); // "Y"

// Testing Objects for Properties

var myObj = {
    top: "hat",
    bottom: "pants"
  };
  myObj.hasOwnProperty("top");    // true
  myObj.hasOwnProperty("middle"); // false
console.log(myObj.hasOwnProperty("middle"));

// Accessing Nested Objects

var ourStorage = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
  };
  ourStorage.cabinet["top drawer"].folder2;  // "secrets"
  ourStorage.desk.drawer; // "stapler"

  console.log(ourStorage.desk.drawer);

  

