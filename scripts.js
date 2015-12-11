document.write ("Welcome To Word Calculator");

function changeText() {
	document.getElementById("para").innerHTML=Date();
}

var time = new Date().getHours(); 
if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
document.write("<br />" + greeting);


document.write("<br />");

var todayDate = new Date();

var date = todayDate.getDate();


document.write(month + date + year);
document.write("<br />" + month + "/" + date + "/" + year);



function save(){
	word1 = document.getElementById("things").value;
	if (word1 == "") {
		x == 0;
	} else {
	x = Math.floor( Math.random()*5 );
}
}
function saves(){
	word2 = document.getElementById("stuff").value;
	if (word2 == "") {
		x == 0;
	} else {
    y = Math.floor( Math.random()*5 );
}
}


function Add(){
	total = x + y;
	document.write("You're first word (" + word1 + ") was given the value of " + x + "<br /> You're second word (" + word2 + ") was given the value of " + y + "<br /> Added to each other gives us the value of " + total);
	window.alert("You're Answer is " + total);
	}
	
function Subtract(){
	totals = x - y;
	document.write("You're first word (" + word1 + ") was given the value of " + x + "<br /> You're second word (" + word2 + ") was given the value of " + y + "<br /> Subtracting the 2nd from the first gives us the value of " + totals);
	window.alert("You're Answer is " + totals);
	}
	
function Multiply(){
	totally = x * y;
	document.write("You're first word (" + word1 + ") was given the value of " + x + "<br /> You're second word (" + word2 + ") was given the value of " + y + "<br /> Multiplied to each other gives us the value of " + totally);
	window.alert("You're Answer is " + totally);
	}
	
function Divide(){
	totality = x / y;
	document.write("You're first word (" + word1 + ") was given the value of " + x + "<br /> You're second word (" + word2 + ") was given the value of " + y + "<br /> Dividing the 2nd from the 1st gives us the value of " + totality);
	window.alert("You're Answer is " + totality);
	}