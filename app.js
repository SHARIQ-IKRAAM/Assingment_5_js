// Chapter 17 - 20 (for Loops)
// Home Assignment

for (var i = 0; i < 10; i++) {
}

(var i = 0; i <= 12; i++) {
} 
//   this loop will run 13 times

// The 5 missing characters in the code are: 
"var i = 0; i <= 4; i++"

for (var count = 0; count < 100; count++) {
}

for (var i = 3; i > 0; i--) {
}

var array = [1, 2, 3, 4, 5];
var numberOfElements = array.length;

var flag = true;

for (var i = 0; i < pets.length; i++) {
}

for (var i = 1; i <= 10; i++) {
  if (i === 2) {
    alert(i - 1); // Display 1 in an alert during the second iteration.
    break; // Break out of the loop after the second iteration.
  }
}

const userNames = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Prompt the user to enter their first name
const firstName = prompt("Enter first name");

// Loop through the user names array
for (var i = 0; i < userNames.length; i++) {
// Check if the entered name matches a user name in the array
if (firstName === userNames[i]) {
  alert("Welcome, " + firstName);
  break; // Exit the loop if a match is found
} else {
  alert("Please write the correct user name.");
}
}