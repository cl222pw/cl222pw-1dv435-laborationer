




//toggle funktionen
/*function toggle(){
   var hide = document.querySelector(".hide"); 	//H�mtar hide och ger den namnet hide
   if (hide.style.display =='block'){  			//om hide �r display: block; s� g�r den om den till display: none;
	   hide.style.display = 'none';
	   return;
   }
   hide.style.display ='block'; //om ovan inte st�mmer, g�r den hide till display: block;
} */

function toggle(){
	if(document.getElementById("showhide").className == "hide")
		document.getElementById("showhide").className = "show";

	else
		document.getElementById("showhide").className = "hide";
}



//Ger "hidebutton" allts� knappen man trycker p� f�r att toggla ett namn
var hidebutton = document.querySelector("#hidebutton");
//G�r att n�r man trycker p� showhide knappen s� k�r man toggle funktionen
hidebutton.onclick = toggle