var boxRed;
var boxBlue;
var mouseover = false;

document.addEventListener("DOMContentLoaded", init);

function init (){
   
   boxRed = document.querySelector(".long-rect");
   boxBlue= document.querySelector(".short-rect");
   boxRed.addEventListener("mouseover", onMouseover);
   boxRed.addEventListener("mouseout", onMouseout);
   boxBlue.addEventListener("click", onClick);
}

function onMouseover() {
	boxBlue.innerText = "you can click";
	boxRed.innerText = "You moused over the big box";
	mouseover = true;
}

function onClick(){
	
	if (mouseover){
		alert("you clicked it"); 
		
	}
}

function onMouseout() {
	boxRed.innerText = "Your mouse is out";
}


