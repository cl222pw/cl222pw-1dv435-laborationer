

function validate() {
	//skapar "fail" som ger ett felmeddelande
    var fail = 'Felaktig valuta'
	
	//letar upp tbody från html-koden för att sedan lägga till tabellrader i den
    var failtable = document.querySelector('#tbody');
	//skapar en tabellrad som ska läggas in i tabellens body
	var failtr = document.createElement('tr');
	//skapar ett element som används senare
	var failTd = document.createElement('td');
    
	//letar upp amount idt från html-koden
	var amount = document.querySelector("#amount");
	
	//skapar amountNum som blir NaN om amount inte är siffor
    var amountNum = parseFloat(amount.value);

	//om amount är större än 0 OCH är ett nummer blir dens class "correct"
	if(amount.value.length > 0 && !isNaN(amountNum) ) {
		amount.className = 'correct';
        amount.value = amountNum;
	}
	//annars blir dens class "fail"
	else {
		amount.className = 'fail';
	}
	//om klassen fail finns så skapar den en text-node som lägger till ett felmeddelande i tabellen
	if (document.querySelector('.fail')) {
		var failTextNode = document.createTextNode(fail);
        failTd.appendChild(failTextNode)
	    failtr.appendChild(failTd);
		
	    failtable.insertBefore(failtr, failtable.firstChild);
		  
	}
	//om inte så körs funktionen convert
	else {
	convert(amount.value);
	}    
}

//funktionen convert
function convert(amount) {

	//letar upp tbody från html-koden för att sedan lägga till tabellrader i den
	var table = document.querySelector('#tbody');
	//skapar en tabellrad som ska läggas in i tabellens body
	var tr = document.createElement('tr');
	//skapar ett element som används senare
	var amountTd = document.createElement('td');
    
	//skapar en variabel som tar det inmatade talet och multiplicerar det för att få fram motsvarande mängd euro/dollar
	//gör också så att euro/dollar variablerna endast visar 2 decimaler
    var euro = (amount * 0.112158205).toFixed(2);
    var dollar = (amount * 0.152423).toFixed(2);
	//texten som ska visas senare
    var text = amount + ' svenska kronor blir ' + euro + ' euro och ' + dollar + ' dollar.'
    
	//lägger till "text" variabeln som text i tabellen
    var amountTextNode = document.createTextNode(text);
     
	amountTd.appendChild(amountTextNode)
	tr.appendChild(amountTd);
	table.insertBefore(tr, table.firstChild);
}



var button = document.querySelector(".button");

button.onclick = validate;
