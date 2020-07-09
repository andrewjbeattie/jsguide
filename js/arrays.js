//Writing arrays

var cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

//Nesting arrays

var score = [["Bulls", 23], ["White Sox", 45]];
console.log(score);

//Accessing arrays with indexes

var array = [50,60,70];
array[0]; // equals 50
var data = array[1];  // equals 60
console.log(data);

//Modifying arrays with indexes

var ourArray = [50,40,30];
ourArray[0] = 15;
// equals [15,40,30]
console.log(ourArray);

// Accessing multi dimensional arrays with indexes

var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14]
  ];
  arr[3]; // equals [[10,11,12], 13, 14]
  arr[3][0]; // equals [10,11,12]
  arr[3][0][1]; // equals 11

  console.log(arr[3][0][1]);

  // Manipulating arrays with push()

var arr1 = [1,2,3];
arr1.push(4);
// arr1 is now [1,2,3,4]
console.log(arr1);
  
var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
// arr2 now equals ["Stimpson", "J", "cat", ["happy", "joy"]]
console.log(arr2);

// Manipulating arrays with pop()

var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]

// Manipulating arrays with shift()

var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].
console.log(removedFromOurArray); // Returns "Stimpson"
console.log(ourArray); // Returns ["J", ["cat"]]

// Manipulating arrays with unshift()

var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]
console.log(ourArray); // Returns ["Happy", J", "cat"]

// Converting array into a string

var colours = ["red", "blue", "green"];
colours.join(" ")

console.log(colours);
console.log(colours.join());

// Converting a string into an array

var codes = "js css html";
codes.split(" ");

console.log(codes);
console.log(codes.split());

// Getting the size of an array
var arr = [1,5,10,16];
console.log(arr.length); // Should return 4

// Accessing nested arrays
var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
console.log(ourPets[0].names[1]); // "Fluffy"
console.log(ourPets[1].names[0]); // "Spot"