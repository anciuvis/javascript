// innerHTML - iraso i tago viduri teksta, kuris bus skaitomas kaip HTML kodas, tai realiai galima viduj prikurti puslapio
// let d = document.getElementById('mdiv');
// console.log(d.innerHTML);
// d.innerHTML = 'blabla <p id="pid">bla</p>!';
// let p = document.getElementById('pid');
// console.log(p);
// // document.write - prideda i gala teksta, todel sunkiau valdyti kur jis atsidurs, vengti naudoti realiai
// // setTimeout- jeigu noriu kad pradetu vykdyti funkcija po kazkiek laiko, pvz 200ms delay. su salyga kad pele buvouzvaziuota ant paveikslelio pvz.
// // funkcija setTimeout grazina
// var myVar = null;
// function mouseIn() {
// 	document.getElementById('status').innerHTML = 'pele uzvaziavo';
// 	myVar = setTimeout(mouseSleep, 500);
// }
//
// function mouseSleep() {
// 	document.getElementById('status').innerHTML = 'pele uzmigo';
// 	myVar = null;
// }
//
// function mouseOut() {
// 	document.getElementById('status').innerHTML = 'pele isvaziavo';
// 	if (myVar) {
// 	clearTimeout(myVar);
// 	}
// }
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
	} else {
		pause.innerHTML = 'pause';
	}
}

function clickStart() {
	if (!myFun) {
		myFun = setInterval(chrono, speed);
	}
	pause.innerHTML = 'pause';
}

function chrono() {
	console.log('tick');
	let s = sec.innerHTML;
	s++;
	let str = "00" + s;
	str = str.substring(str.length - 2);
	sec.innerHTML = str;
	if (s > 59) {
		sec.innerHTML = "00";
		let m = min.innerHTML;
		m++;
		str = "00" + m;
		str = str.substring(str.length - 2);
		min.innerHTML = str;
		if (m > 59) {
			min.innerHTML = "00";
			let h = hrs.innerHTML;
			h++;
			str = "00" + h;
			str = str.substring(str.length - 2);
			hrs.innerHTML = str;
			if (h > 23) {
				hrs.innerHTML = "00";
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
	console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
}
