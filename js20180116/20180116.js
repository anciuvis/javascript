// innerHTML - iraso i tago viduri teksta, kuris bus skaitomas kaip HTML kodas, tai realiai galima viduj prikurti puslapio
let d = document.getElementById('mdiv');
console.log(d.innerHTML);
d.innerHTML = 'blabla <p id="pid">bla</p>!';
let p = document.getElementById('pid');
console.log(p);
// document.write - prideda i gala teksta, todel sunkiau valdyti kur jis atsidurs, vengti naudoti realiai
// setTimeout- jeigu noriu kad pradetu vykdyti funkcija po kazkiek laiko, pvz 200ms delay. su salyga kad pele buvouzvaziuota ant paveikslelio pvz.
// funkcija setTimeout grazina
var myVar = null;
function mouseIn() {
	document.getElementById('status').innerHTML = 'pele uzvaziavo';
	myVar = setTimeout(mouseSleep, 500);
}

function mouseSleep() {
	document.getElementById('status').innerHTML = 'pele uzmigo';
	myVar = null;
}

function mouseOut() {
	document.getElementById('status').innerHTML = 'pele isvaziavo';
	if (myVar) {
	clearTimeout(myVar);
	}
}
//

var pause = document.getElementById('toggle-pause');
var start = document.getElementById('start');
var reset = document.getElementById('reset');
var faster = document.getElementById('faster');
var slower = document.getElementById('slower');
var clock = document.getElementById('clock');
var myVar = setInterval(clickStart, 1000);

pause.addEventListener('click', clickPause);
start.addEventListener('click', clickStart);
// reset.addEventListener('click', clickReset);
// faster.addEventListener('click', clickFaster);
// slower.addEventListener('click', clickSlower);

function clickPause() {
	if (pause.innerHTML == 'pause') {
		pause.innerHTML = 'continue';
	} else if (pause.innerHTML == 'continue') {
		pause.innerHTML = 'pause';
	} else {
		pause.innerHTML = 'continue';
	}
}

function clickStart() {
	var d = new Date();
	clock.innerHTML = d.toLocaleTimeString();
}
