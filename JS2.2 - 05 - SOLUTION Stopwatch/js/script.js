'use strict';

/*************************************
	Variables init
**************************************/
var compteur;
var clock = {
	'hand' : {},
	'time' : {
		hours:0,
		minutes:0,
		seconds:0,
		hundredth:0,
	}
};



/*************************************
		Main method
**************************************/
function chrono(){
	// Aliases
	var t = clock.time;
	var h = clock.hand;
	
	t.hundredth++; 
	
	// If tenth > 9, we reset to 0 and increments the seconds by 1
	if (t.hundredth > 99){
		t.hundredth = 0;
		t.seconds ++;
	}		
	
	// If seconds > 59, we reset to 1 and increments the minutes by 1
	if (t.seconds > 59){
		t.seconds = 0;
		t.minutes ++
	}

	//We display the tenths
	//h.hundredth.textContent =" "+t.hundredth;
	h.hundredth.style.transform='rotate('+ timeToDegree(t.hundredth, 100) +'deg)';
	
	//We display the seconds
	//h.seconds.textContent =" "+t.seconds;
	h.seconds.style.transform='rotate('+ timeToDegree(t.seconds, 60) +'deg)';
	
	//We display the minutes
	//h.minutes.textContent =" "+t.minutes;
	h.minutes.style.transform='rotate('+ timeToDegree(t.minutes, 60) +'deg)';
	
}

function onClickToggleStartPause(){
	if(this.id == 'start'){
		compteur = setInterval(chrono,10);
		this.id = 'pause';
		this.textContent = 'Pause';
	} else {
		clearInterval(compteur);
		this.id = 'start';
		this.textContent = 'Start';
	}
}

// Reset method
function onClickResetTimer(){ 
	clearTimeout(compteur);
	
	// Resets the hands
	clock.hand.minutes.style.transform = "rotate(0deg)";
	clock.hand.seconds.style.transform = "rotate(0deg)";
	clock.hand.hundredth.style.transform = "rotate(0deg)";
}




/*************************************
			Boot
**************************************/

document.addEventListener('DOMContentLoaded', function(){
	
	// retrieve the hands
	clock.hand.hours = document.querySelector('#clock .hand.hours');
	clock.hand.minutes = document.querySelector('#clock .hand.minutes');
	clock.hand.seconds = document.querySelector('#clock .hand.seconds');
	clock.hand.hundredth = document.querySelector('#clock .hand.hundredth');
	
	// Buttons handlers
	createEventHandler('click', '#start', onClickToggleStartPause)
	createEventHandler('click', '#reset', onClickResetTimer);
	
});
