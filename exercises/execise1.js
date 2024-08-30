/* Take the following steps (and experiment further) to understand how HTML 
elements can be manipulated with JavaScript code.
1. Select the element with the class output.
2. Create another JavaScript object called mainList and select only the ul tag 
that is within the output element. Update the ID of that ul tag to mainList.
3. Search for the tagName of each div, and output them into the console as an 
array.
4. Using a for loop, set the ID of each of the div tags to id with a numeric value 
of the order they appear within output. Still within the loop, alternate the 
color of the contents of each element in output to be red or blue. */

const outPutelem = document.querySelector(".output");
const mainList = outPutelem.querySelector("ul");
mainList.id = "mainlist";
console.log(mainList);
const divElem = document.querySelectorAll("div");
console.log(divElem);
for (let i = 0; i < divElem.length; i++) {
	console.log(divElem[i].tagName);
	divElem[i].id = "id" + (i + 1);
	if (i % 2) {
		divElem[i].style.color = "red";
	} else {
		divElem[i].style.color = "blue";
	}
}
