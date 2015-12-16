
var nume = document.getElementById("nume");


nume.addEventListener("input", function(){

	var value = nume.value;
	console.log(value);

	var values = value.split(' ');

	if (values.length === 2) {

		var numePrim = values[0];
		var numeSecund = values[1];

		console.log(values);

		if ((numePrim.length >= 3) && (numeSecund.length >= 3)) {
			document.getElementById("container").classList.add("valid");
		}; 


	} else {

			document.getElementById("container").classList.remove("valid");

	};

}, false
);






// var address = theEncodedString.split(/~/)
// var name = address[0], street = address[1]











//var r = document.getElementById("r");
//var g = document.getElementById("g");
//var b = document.getElementById("b");


//r.addEventListener("input", function(){

//	console.log(r.value);

//	var red = r.value;
//	var green = g.value;
//	var blue = b.value;

//	var culoarea = "rgb(" + red + ", " + green + ", " + blue + ")"; 
//	document.body.style.backgroundColor = culoarea;

//});

//g.addEventListener("input", function(){


//	console.log(g.value);

//	var red = r.value;
//	var green = g.value;
//	var blue = b.value;

//	var culoarea = "rgb(" + red + ", " + green + ", " + blue + ")"; 
//	document.body.style.backgroundColor = culoarea;

//});

//b.addEventListener("input", function(){


//	console.log(b.value);

//	var red = r.value;
//	var green = g.value;
//	var blue = b.value;

//	var culoarea = "rgb(" + red + ", " + green + ", " + blue + ")"; 
//	document.body.style.backgroundColor = culoarea;

//});
