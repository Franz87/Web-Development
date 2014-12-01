/*
	- dataTransfer: contiene i dati che vengono draggati in un'operazione di drag&drop
		- effectAllowed: specifica gli effetti permessi con il drag (move, copy, link, copyLink, all, none, ...)
		- dropEffect: specifica l'effetto per l'operazione di drop (copy, move, link, none)
		- setData(formato, attributo): specifica il dato da passare nell'operazione di drag&drop (occorre specificare il formato e l'attributo)
		- getData(formato): acquisisce il dato passato da setData (occorre specificare il formato)
	- target: acquisisce l'oggetto a cui si riferisce l'evento (evento.target)
		- getAttribute(attributo): prende il valore dell'attributo specificato dell'oggetto a cui si fa riferimento
		- setAttribute(attributo, valore): imposta il valore all'attributo dell'oggetto a cui si fa riferimento
		- appendChild(elemento): aggiunge l'elemento all'oggetto a cui si fa riferimento  
	- createElement(elemento): crea un elemento di qualsiasi genere (img, p, div, ...)
	- preventDefault: l'evento di default associato a quell'evento non viene eseguito
	
*/

function dragStart(evento)
{
	evento.dataTransfer.effectAllowed = 'copy';	// effetto consentito (move, copy, ...)
	evento.dataTransfer.dropEffect = 'move';	// tipo di icona sull'oggetto draggato (move, copy, ...)
	
	// alert(evento.target);	// torna la descrizione dell'elemento draggato
	
	evento.dataTransfer.setData("text/unicode", evento.target.getAttribute('src'));	// prende il nome dell'immagine
	
	// alert(evento.target.getAttribute('src'));
	// alert(evento.dataTransfer.setData("text/unicode", evento.target.getAttribute('src')));
}

function dragOver(evento)
{
	evento.preventDefault();
}

function drop(evento)
{
	evento.preventDefault();
	
	var nomeImgTrascinata = evento.dataTransfer.getData("text/unicode");	// recupero il nome dell'img dal pacchetto dati che viene ricevuto
	// alert(nomeImgTrascinata);
	
	var oggettoDrop = evento.target;
	// alert(oggettoDrop);
	
	// Creiamo al volo un oggetto <img> in miniatura dell'immagine che si sta trascinando
	var replicaImmagine = document.createElement("img");
	replicaImmagine.setAttribute('src', nomeImgTrascinata);	// setta l'attributo src dell'oggetto <img> e vi inserisce il nome dell'img trascinata
	oggettoDrop.appendChild(replicaImmagine);	// aggiunge l'oggetto <img> all'oggetto in cui ci si trova (in questo caso il div delle domande)
	
	if(oggettoDrop.getAttribute('data-risposta') == nomeImgTrascinata)
		oggettoDrop.style.backgroundColor = 'green';
	else
		oggettoDrop.style.backgroundColor = 'red';
	
	replicaImmagine.setAttribute('class', 'replicaImmagine');	// assegna la classe "replicaImmagine" alla miniatura appena creata
}