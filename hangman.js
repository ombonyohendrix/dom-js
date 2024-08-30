/* 1. Set up an array that contains some words or phrases that you want to use in 
the game.
2. In JavaScript, create a main game object containing a property to contain the 
current word solution, and another property to contain the array of letters 
of the solution. It should also create an array to contain the page elements 
and correspond with the values of the index values of each letter from the 
solution, and finally add a property to count the number of letters left to 
solve and end the game when needed.
3. Select all the page elements into variables so they are easier to access in the 
code 
4. Add an event listener to the Start Game button, making it clickable, and 
when it gets clicked it should launch a function called startGame().
5. Within startGame(), check if the words array has any words left. If it does, 
then hide the button by setting the .display object to none. Clear the game 
contents and set the total to 0. Within the current word in the game object, 
assign a value, which should be the response of shift() from the array 
containing the in-game words.
6. In the game solution, convert the string into an array of all the characters in 
the word solution using split().
7. Create a function called builder() that can be used to build the game board. 
Invoke the function within the startGame() function once all the game values 
are cleared and set.
8. Create a separate function that you can use to generate page elements. In the 
parameters, get the type of element, the parent that the new element will be 
appended to, the output content for the new element, and a class to add to 
the new element. Using a temporary variable, create the element, add the 
class, append to the parent, set the textContent, and return the element.
9. In the builder() function, which will also get invoked once startGame() is 
run, clear the innerHTML from the letters and puzzle page elements. 
10. Iterate through the game solution array, getting each letter of the solution. 
Use the builder() function to generate page elements, add an output value 
of -, set a class, and append it to the main puzzle page element. 
11. Check if the value is blank, and if it is, clear textContent and update the 
border to white. If it's not blank, increment the total so that it reflects the total 
number of letters that must be guessed. Push the new element into the game 
puzzle array.
12. Create a new function to update the score so that you can output the current 
number of letters left. Add it to the builder() function.
13. Create a loop to represent the 26 letters of the alphabet. You can generate 
the letter by using an array containing all the letters. The string method 
fromCharCode() will return the character from the numeric representation.
14. Create elements for each letter, adding a class of box and appending it to the 
letters page element. As each element gets created, add an event listener 
that runs a function called checker().
15. Once the letter gets clicked, we need to invoke the checker() function, which 
will remove the main class, add another class, remove the event listener, and 
update the background color. Also invoke a function called checkLetter(), 
passing the value of the clicked letter into the argument.

16. The checkLetter() function will loop through all the solution letters. Add a 
condition to check if the solution letter is equal to the letter selected by the 
player. Make sure to convert the inputted letter to uppercase so that you can 
match the letters accurately. Update the matching letters in the puzzle using 
the game puzzle array and the index from the letter in the solution. The index 
values will be the same on each, which provides an easy way to match the 
visual representation with what is in the array.
17. Subtract one from the game global object that tracks the total letters left to be 
solved, invoke the updatescore() function to check if the game is over, and 
update the score. Set the textContent of the puzzle to the letter removing the 
original dash.
18. In the updatescore() function, set the score to the number of letters left. If the 
total left is less than or equal to zero, the game is over. Show the button so 
that the player has an option for the next phrase.*/

const game = { cur: "", solution: "", puzz: [], total: 0 };
const myWords = ["Learn javascript", "learn html", "Ombonyo Hendrix"];
const score = document.querySelector(".score");
const puzzle = document.querySelector(".puzzle");
const letters = document.querySelector(".letters");
const btn = document.querySelector("button");
btn.addEventListener("click", startGame);
function startGame() {
	if (myWords.length > 0) {
		btn.style.display = "none";
		game.puzz = [];
		game.total = 0;
		game.cur = myWords.shift();
		game.solution = game.cur.split("");
		builder();
	} else {
		score.textContent = "No more words";
	}
}
function createElements(elType, parentEle, output, cla) {
	const temp = document.createElement(elType);
	temp.classList.add("boxE");
	parentEle.append(temp);
	temp.textContent = output;
	return temp;
}
function updateScore() {
	score.textContent = `Total letters left : ${game.total}`;
	if (game.total <= 0) {
		console.log("Game is over");
		score.textContent = "Game is over";
		btn.style.display = "block";
	}
}
function builder() {
	letters.innerHTML = "";
	puzzle.innerHTML = "";
	game.solution.forEach((lett) => {
		let div = createElements("div", puzzle, "-", "boxE");
		if (lett == " ") {
			div.style.borderColor = "white";
			div.textContent = " ";
		} else {
			game.total++;
		}
		game.puzz.push(div);
		updateScore();
	});
	for (let i = 0; i < 26; i++) {
		let temp = String.fromCharCode(65 + i);
		let div = createElements("div", letters, temp, "box");
		let checker = function (e) {
			div.style.backgroundColor = "#add";
			div.classList.remove("box");
			div.classList.add("boxD");
			div.removeEventListener("click", checker);
			checkLetter(temp);
		};
		div.addEventListener("click", checker);
	}
}
function checkLetter(letter) {
	console.log(letter);
	game.solution.forEach((ele, index) => {
		if (ele.toUpperCase() == letter) {
			game.puzz[index].textContent = letter;
			game.total--;
			updateScore();
		}
	});
}
