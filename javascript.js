




//toggle funktionen
/*function toggle(){
   var hide = document.querySelector(".hide"); 	//Hämtar hide och ger den namnet hide
   if (hide.style.display =='block'){  			//om hide är display: block; så gör den om den till display: none;
	   hide.style.display = 'none';
	   return;
   }
   hide.style.display ='block'; //om ovan inte stämmer, gör den hide till display: block;
} */

function toggle(){
	if(document.getElementById("showhide").className == "hide")
		document.getElementById("showhide").className = "show";

	else
		document.getElementById("showhide").className = "hide";
}



//Ger "hidebutton" alltså knappen man trycker på för att toggla ett namn
var hidebutton = document.querySelector("#hidebutton");
//Gör att när man trycker på showhide knappen så kör man toggle funktionen
hidebutton.onclick = toggle