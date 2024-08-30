/* 1. Select all the page buttons into a JavaScript object.
2. Loop through each button, and create a function within the button scope 
called output.
3. Within the output() function, add a console.log() method that outputs 
the current object's textContent. You can reference the current parent object 
using the this keyword.
4. As you loop through the buttons attach an event listener that when clicked 
invokes the output() function. */
const btns = document.querySelectorAll("button");
console.log(btns);
btns.forEach((btn) => {
	function outPut() {
		console.log(this.textContent);
	}
	btn.addEventListener("click", outPut);
});
