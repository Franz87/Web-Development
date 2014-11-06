// definisco le variabili
var canvas;
var context;
window.onload = function() {
	// associo canvas e contesto alle variabili
	canvas = document.getElementById("progDisegno");
	context = canvas.getContext("2d");
	// collego gli eventi
	canvas.onmousedown = inizioDisegno;		// pulsante premuto sull'elemento
	canvas.onmouseup = interrompoDisegno;	// pulsante rilasciato
	canvas.onmouseout = interrompoDisegno;	// puntatore lascia l'eemento
	canvas.onmousemove = disegno;			// puntatore si muove all'interno dell'elemento
};
	
// funzione "modificaColore"
// Tengo traccia della precedente icona colore selezionata
var colorePrecedente;
function modificaColore(color, img) {
	// modifico il colore in quello corrente.
    context.strokeStyle = color;
    // attribuisco la classe "selezionato" all’elemento cliccato.
    img.className = "selezionato";
    // rimuovo la classe "selezionato" agli altri elementi
    if (colorePrecedente != null) colorePrecedente.className = "";
    colorePrecedente = img;
}

// funzione "modificaSpessore"
// Tengo traccia della precedente icona spessore selezionata
var spessorePrecedente;
function modificaSpessore(spessore, img) {
	// modifico il colore in quello corrente.
    context.lineWidth = spessore;
    // attribuisco la classe "selezionato" all’elemento cliccato.
    img.className = "selezionato";
    // rimuovo la classe "selezionato" agli altri elementi
    if (spessorePrecedente != null) spessorePrecedente.className = "";
    spessorePrecedente = img;
}

// ****** AZIONI ******
var disegnoAttivo = false;	// variabile globale da poter interpellare a ogni azione per conoscere l’attuale stato

// funzione "inizioDisegno" associata all'evento "onMouseDown"
function inizioDisegno(e) {
    // setto la variabile su true
    disegnoAttivo = true;
    // inizio un nuovo path con colore e spessore correnti
    context.beginPath();
    // posiziono l'inizio in corrispondenza del puntatore del mouse
    context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}

// funzione "disegno" associata all'evento "onMouseMove"
function disegno(e) {
    if (disegnoAttivo == true) {
        // trovo la posizione attuale del puntatore
        var x = e.pageX - canvas.offsetLeft;
        var y = e.pageY - canvas.offsetTop;
        // disegno la linea fino all'attuale posizione del mouse
        context.lineTo(x, y);
        context.stroke(); 
    }
}

// funzione "interrompoDisegno" associata agli eventi "onMOuseOut" e "onMouseUp"
function interrompoDisegno () {
    disegnoAttivo = false;	// var globale settata su false
}

// funzione "pulisci", non è altro che un semplice richiamo al metodo "clearRect".
function pulisci() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

// funzione "salva" che, attraverso il metodo "toDataUrl", converte l’immagine in una sequenza di caratteri formattati come fosse un URL
// Con questo metodo, tuttavia, per salvare l’immagine sarà necessario che l’utente, attraverso il tasto destro del mouse, faccia clic
// fisicamente su “Salva immagine con nome…”.
function salva() { 
    // aggancio l'elemento img
    var imageCopy = document.getElementById("savedImageCopy");
    // mostro i dati del canvas nell'elemento
    imageCopy.src = canvas.toDataURL();  
    // Visualizzo il div che contiene il tag img
    var imageContainer = document.getElementById("savedCopyContainer");
    imageContainer.style.display = "block";
}
