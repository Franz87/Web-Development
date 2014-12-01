
/* Seleziona il primo elemento con 'class=transition' e gli aggiunge la classe 'translateAnimationClass' che genera la rotazione */
function startRotate()
{ 
	document.getElementsByClassName('transition')[0].classList.add('translateAnimationClass');
}

/* Rimuove la 'class=translateAnimationClass' dal primo elemento con class='transition' (stoppa la rotazione) */
function stopRotate()
{ 
	document.getElementsByClassName('transition')[0].classList.remove('translateAnimationClass');
}

/*var gradi = 0;

function startRotateX()
{
	setInterval(ruotaX, 150);
}

function ruotaX()
{
	gradi += 5;
	
	$("#rotX").html(gradi);
	$("#divSx").css("-webkit-transform", "rotateX("+gradi+"deg)");
}*/