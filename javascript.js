//funktionen toggle
function toggle(){
	//om showhide har class = hide, ändra den till class = show
	if(document.getElementById("showhide").className == "hide")
		document.getElementById("showhide").className = "show";
	//annars ändra till class = hide
	else
		document.getElementById("showhide").className = "hide";
}

//Ger "hidebutton" alltså knappen man trycker på för att toggla ett namn
var hidebutton = document.querySelector("#hidebutton");
//Gör att när man trycker på showhide knappen så kör man toggle funktionen
hidebutton.onclick = toggle