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

let start = document.getElementById('start');
let pause = document.getElementById('toggle-pause');
let reset = document.getElementById('reset');
let faster = document.getElementById('faster');
let slower = document.getElementById('slower');
let speed = 1000;
let myFun = null;
let sec = document.getElementById('sec');
let min = document.getElementById('min');
let hrs = document.getElementById('hrs');

pause.addEventListener('click', clickPause);
start.addEventListener('click', clickStart);
reset.addEventListener('click', clickReset);
faster.addEventListener('click', clickFaster);
slower.addEventListener('click', clickSlower);

function clickPause() {
	if (myFun) {
		clearInterval(myFun);
		myFun = null;
	} else {
		myFun = setInterval(chrono, speed);
	}
	if (pause.innerHTML == 'pause') {
		pause.innerHTML = 'continue';
	} else if (pause.innerHTML == 'continue') {
		pause.innerHTML = 'pause';
	} else {
		pause.innerHTML = 'continue';
	}
}

function clickStart() {
	if (!myFun) {
		myFun = setInterval(chrono, speed);
	}
	pause.innerHTML = 'pause';
}

function chrono(){
	sec.innerHTML++
	if (sec.innerHTML > 59){
		sec.innerHTML = 0;
		min.innerHTML++;
		if (min.innerHTML > 59) {
			min.innerHTML = 0;
			hrs.innerHTML++;
			if (hrs.innerHTML > 23) {
				hrs.innerHTML = 0;
			}
		}
	}
}

function clickFaster() {
	if (myFun) {
		clearInterval(myFun);
		if (speed>1) {
			speed/=2;
		}
		myFun = setInterval(chrono, speed);
	}
}

function clickSlower() {
	if (myFun) {
		clearInterval(myFun);
		speed*=2;
		myFun = setInterval(chrono, speed);
	}
}

function clickReset() {
	if (myFun) {
		clearInterval(myFun);
		myFun = null;
	}
	sec.innerHTML = 0;
	min.innerHTML = 0;
	hrs.innerHTML = 0;
	pause.innerHTML = 'pause';
	speed = 1000;
}
