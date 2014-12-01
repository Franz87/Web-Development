function pausa_riparti()
{
	var statoAttuale = document.getElementById("div_1").style.webkitAnimationPlayState;
	
	if(statoAttuale == 'running')
	{
		document.getElementById("div_1").style.webkitAnimationPlayState = "paused";
		document.getElementById("div_2").style.webkitAnimationPlayState = "paused";
		document.getElementById("div_3").style.webkitAnimationPlayState = "paused";
		document.getElementById("div_4").style.webkitAnimationPlayState = "paused";
	}
	else
	{
		document.getElementById("div_1").style.webkitAnimationPlayState = "running";
		document.getElementById("div_2").style.webkitAnimationPlayState = "running";
		document.getElementById("div_3").style.webkitAnimationPlayState = "running";
		document.getElementById("div_4").style.webkitAnimationPlayState = "running";
	}
}