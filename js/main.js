// Create an array with 5 different strings. Log the length of your array

var stringArray = ["naruto", "sasuke", "sakura", "jiraya", "kakashi"];
console.log(stringArray);
// Log the length of each of the strings in your array.
for (var i = 0; i < stringArray.length; i++) {
	console.log(stringArray[i].length);
};
// Finally, reverse the array and console the array again
// stringArray.reverse();
// console.log(stringArray)

// Comment out your reverse function. Create a copy of your original array (do not simply re-type your array; create a new variable containing an empty array, and use .push() to add each item in your original array into new, empty array)
var copy = [];
for(var i = 0; i < stringArray.length; i++) {
	copy.push(stringArray[i]);
};
copy.reverse();
console.log(copy);

// sort your array of strings alphabetically.
stringArray.sort();

// create an array of at least 5 numbers. each number should be at least two digits. sort the array numerically, in ascending order (smallest to biggest).
var numbersArray = [33, 13, 55, 99, 88];
numbersArray.sort(function(a, b) {
	// look at values as it sorts
	console.log(a, b);
	return a - b;
});
console.log(numbersArray);

// create an array of three strings. .
var stringArray2 = ["rock lee", "might guy", "neji hyuga" ];

// using array methods, add two new strings to the end of the array
stringArray2.push("gara", "choji");

// remove one from the beginning
stringArray.shift();

// console the final array - it should have four strings
console.log(stringArray2);

// remove one from the beginning
stringArray2.shift();

// console log the final array - it should have four strings
console.log(stringArray2);

// create a new, empty array stored in a variable.
var emptyArr = [];

// create a function which will run when the button is clicked. this function should add the value of the input to your empty array, THEN, your function should effectively loop through your array and append each item inside a list item to the unordered list  in your HTML. It should do this correctly no matter how many strings are in your array (in other words, if your array has one string, you will see one list item; if your array has five strings, you will see five list items).
var myList = document.getElementsByTagName("ul")[0];

function populateList() {
	var userValue = document.getElementsByTagName("input")[0].value;
	// push the value of the input into our empty array
	emptyArr.push(userValue);
	// empty out the list first (in case there's already list-items in there)
	myList.innerHTML = "";
	for(var i = 0; i < emptyArr.length; i++) {
		// create a list item
		var newLi = document.createElement("li");
		// add the strings into the list-items
		newLi.innerText = emptyArr[i];
		// append the list-item to our list
		myList.appendChild(newLI);
	}
}