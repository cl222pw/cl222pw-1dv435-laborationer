//funktionen toggle
function toggle(){
	//om showhide har class = hide, �ndra den till class = show
	if(document.getElementById("showhide").className == "hide")
		document.getElementById("showhide").className = "show";
	//annars �ndra till class = hide
	else
		document.getElementById("showhide").className = "hide";
}

//Ger "hidebutton" allts� knappen man trycker p� f�r att toggla ett namn
var hidebutton = document.querySelector("#hidebutton");
//G�r att n�r man trycker p� showhide knappen s� k�r man toggle funktionen
hidebutton.onclick = toggle