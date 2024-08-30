function toggleDisplay() {
	let p = document.getElementById("#magic");
	if (p.style.display === "none") {
		p.style.display = "block";
	} else {
		p.style.display = "none";
	}
}
toggleDisplay();
