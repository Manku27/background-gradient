var c1 = document.querySelector(".c1");
var c2 = document.querySelector(".c2");
var b1 = document.getElementById("b1");
var h3 = document.querySelector("h3");

function setgradient(){
	b1.style.background = " linear-gradient(to right," + c1.value +"," +c2.value+")";
	h3.textContent = b1.style.background + ";";
}

c1.addEventListener("input",setgradient);

c2.addEventListener("input",setgradient);