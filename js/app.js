myFunction() ;
function myFunction() {
	var fname = document.getElementById("fname");
	let box = document.querySelector('#namePart');
	
	let width = box.offsetWidth;
	let height = box.offsetHeight;
	console.log(fname.value.length);
	let fontSize = (box.offsetWidth )/fname.value.length > box.offsetHeight ? box.offsetHeight : (box.offsetWidth )/fname.value.length;
	let paddingTopBottom = (box.offsetHeight - fontSize)/2;
	document.getElementById("namePart").style.fontSize = fontSize + "px";
	document.getElementById("namePart").style.paddingBottom = paddingTopBottom + "px";
	document.getElementById("namePart").style.paddingTop = paddingTopBottom + "px";
	document.getElementById("namePart").innerHTML= fname.value
}