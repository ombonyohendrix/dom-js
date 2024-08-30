/* 1. Select the page elements as JavaScript objects.
2. Add an onclick event listener to the add button. Once the button is clicked, 
it should add the contents of the input field to the end of the list. You can call 
the function addOne().
3. Within addOne(), create li elements to append to the main list on the page. 
Add the input value to the list item text content.
4. Within the addOne() function, get the current value of the addItem input field. 
Use that value to create a textNode with that value, adding it to the list item. 
Append the textNode to the list item. */
document.getElementById("#addNew").onclick = function () {
	addOne();
};
function addOne() {
	const a = document.getElementById("#addItem").value;
	//console.log(a);
	const li = document.createElement("li");
	li.appendChild(document.createTextNode(a));
	document.getElementsByTagName("#slist").appendChild;
}
