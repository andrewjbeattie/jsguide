// while Loops

var ourArray = [];
  var i = 0;
  while(i < 5) {
    ourArray.push(i);
    i++;
  }
  console.log(ourArray);

  // for Loops

  var ourArray1 = [];
  for (var i = 0; i < 5; i++) {
    ourArray1.push(i);
  }
  console.log(ourArray1);

  // Iterate Odd Numbers With a For Loop

  var ourArray2 = [];
      for (var i = 0; i < 10; i += 2) {
        ourArray2.push(i);
      }
      console.log(ourArray2)
  
// Count Backwards With a For Loop

var ourArray3 = [];
  for (var i = 10; i > 0; i -= 2) {
    ourArray3.push(i);
  }
  console.log(ourArray3)

// Iterate Through an Array with a For Loop

var arr = [10, 9, 8, 7, 6];
  for (var i = 0; i < arr.length; i++) {
     console.log(arr[i]);
  }

// Nesting For Loops

var arr1 = [
    [1,2], [3,4], [5,6]
  ];
  for (var i=0; i < arr1.length; i++) {
    for (var j=0; j < arr1[i].length; j++) {
      console.log(arr1[i][j]);
    }
  }

// do-while Loop

var ourArray4 = [];
    var i = 0;
    do {
      ourArray4.push(i);
      i++;
    } while (i < 5);
    console.log(ourArray4);

