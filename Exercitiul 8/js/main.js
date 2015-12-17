
var a = document.getElementById("a");
var operators = document.getElementById("operators");
var b = document.getElementById("b");
var result = document.getElementById("result");


function calculate() { 

	var opVal = operators.value;


	if (opVal == "+") {
		result.value = parseFloat(a.value) + parseFloat(b.value);
		console.log(result.value);

	} else if (opVal == "-") {
		result.value = parseFloat(a.value) - parseFloat(b.value);
		console.log(result.value);

	} else if (opVal == "*") {
		result.value = parseFloat(a.value) * parseFloat(b.value);
		console.log(result.value);

	} else if (opVal == "/") {
		result.value = parseFloat(a.value) / parseFloat(b.value);
		console.log(result.value);
	}

 };


a.addEventListener("input", function() {

	calculate();
});

b.addEventListener("input", function() {

	calculate();
});

operators.addEventListener("input", function() {

	calculate();
});






// var chat = document.getElementById("chat");
// var myForm = document.getElementById("myForm");
// var myInput = document.getElementById("myInput");


// myForm.addEventListener("submit", function (event) {
	
// 	var message = myInput.value;
// 	console.log(message);

// 	var newElement = document.createElement('div');

// 	newElement.className = "statement";
// 	newElement.innerHTML = "<div id='statement'><div id='header' class='clearfix'><img id='avatar' src='http://cdn2.iconfinder.com/data/icons/faceavatars/PNG/D04.png'><span>John Dow</span></div><div id='footer'><p id='text'>" + message + "</p></div></div>";


//	chat.appendChild(newElement);

//	myInput.value = "";
//	myInput.focus();

//	chat.scrollTop = chat.scrollHeight;


//	event.preventDefault();
//});












// var nume = document.getElementById("nume");


// nume.addEventListener("input", function(){

// 	var value = nume.value;

//	var values = value.trim().split(' ');

//	if (values.length === 2) {

//		var numePrim = values[0];
//		var numeSecund = values[1];

//		if ((numePrim.length >= 3) && (numeSecund.length >= 3)) {

//			document.getElementById("container").classList.add("valid");

//		}; 

//	} else {

//			document.getElementById("container").classList.remove("valid");

//	};

//}, false
//);
