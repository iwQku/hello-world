
function setBgColor() {

	var color = document.getElementById('color-picker').value;
	document.body.style.backgroundColor = color;

	var myul = document.getElementById("rList");
	var myli = document.createElement("li");

	var mylink = document.createElement("a");
	var mytxt = document.createTextNode(color);

	myul.appendChild(myli);
	myli.appendChild(mytxt);
	myli.style.color = color;
}
