/* 1. Using querySelectorAll(), select all the elements with a class of title.
2. Using querySelectorAll(), select all the elements with a class of myText. 
This should be the same number of elements as the title elements.
3. Iterate through all the title elements and add event listeners that, once 
clicked, will select the next element siblings.
4. Select the element on the click action and toggle the classlist of the 
element with the class of active. This will allow the user to click the element 
and hide and show the below content.
5. Add a function that will be invoked each time the elements are clicked that 
will remove the class of active from all the elements. This will hide all the 
elements with myText. */

const menus = document.querySelectorAll(".title");
const openText = document.querySelectorAll(".myText");
menus.forEach((el) => {
	el.addEventListener("click", (e) => {
		console.log(el.nextElementSibling);
		remove();
		el.nextElementSibling.classList.toggle("active");
	});
});
function remove() {
	openText.forEach((ele) => {
		ele.classList.remove("active");
	});
}
