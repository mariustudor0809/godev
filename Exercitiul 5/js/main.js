
var r = document.getElementById("r");
var g = document.getElementById("g");
var b = document.getElementById("b");


r.addEventListener("input", function(){

	console.log(r.value);

	var red = r.value;
	var green = g.value;
	var blue = b.value;

	var culoarea = "rgb(" + red + ", " + green + ", " + blue + ")"; 
	document.body.style.backgroundColor = culoarea;

});

g.addEventListener("input", function(){


	console.log(g.value);

	var red = r.value;
	var green = g.value;
	var blue = b.value;

	var culoarea = "rgb(" + red + ", " + green + ", " + blue + ")"; 
	document.body.style.backgroundColor = culoarea;

});

b.addEventListener("input", function(){


	console.log(b.value);

	var red = r.value;
	var green = g.value;
	var blue = b.value;

	var culoarea = "rgb(" + red + ", " + green + ", " + blue + ")"; 
	document.body.style.backgroundColor = culoarea;

});


