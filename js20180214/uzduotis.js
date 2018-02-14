// masinos kiekis - ivedamas
// atstumas - ivedamas
// kas 2sec nusprendziama randomize: ar greiteja ar leteja; ir per kiek - +/-5km/h
// masinos nevaziuoja atgal
// max greitis 150km/h
// kas 0.5sec vyksta: masinos vaziuoja; rodomas visu masinu nuvaziuotas atstumas ir greitis
// laimi masina pirma nuvaziavusi nurodyta atstuma, ir tuom baigaisi lenktynes
// pasibaigus lenktynems, visos masinos turi sustoti
// atspausdinamas visu masinu nuvaziuotas atstumas
// *masinoms naudoti klases
//
// let button = document.getElementById('clickMe');
// button.addEventListener("click", startRace, false);

let minDist = 1;
let maxDist = 100;
let minCount = 1;
let maxCount = 5;
let speed = 500;
let allCars = [];
let myFun ='';
let cumulDist = 0;

function validateForm(cCount, dist) {
	console.log('Validate prasideda');
	let DigOnly = /^[0-9][0-9]*$/;
	if (DigOnly.test(cCount)) {
		console.log('car count yra skaicius');
	} else {
		console.log('car count nera skaicius');
		alert('car count must be a number');
		return;
	}
	if (DigOnly.test(dist)) {
		console.log('dist yra skaicius');
	} else {
		console.log('dist nera skaicius');
		alert('car count must be a number');
		return;
	}
}

function request(message, min, max) {
	let amount;
	do {
		amount = parseInt(window.prompt(message));
	}
	while(isNaN(amount) == true || amount < min || amount > max);
	return amount;
}

function createCars(cCount, dist) {
	let a = [];
	for (let i = 0; i < cCount; i++) {
		a[i] = new Car(i);
	}
	console.log(a);
	return a;
}

function clock() {
	allCars.sort(compareDist);
	console.log(allCars[0].dist);
	cumulDist = allCars[0].dist;
	if (cumulDist < race.dist) {
		console.log('ok');
		raceGoing();
	}
	clearInterval(myFun);
	// myFun = null;
	// cumulDist = 0;
}

function raceGoing() {
	cumulDist+=1;
	console.log(cumulDist);
}

function compareDist(a,b) {
	if (a.dist < b.dist)
		return -1;
	if (a.dist > b.dist)
		return 1;
	return 0;
}


function startRace() {
	console.clear();
	race = new Object();
	race.cCount = request("Enter car count - from "+minCount+" to "+maxCount+"", minCount, maxCount);
	race.dist = request("Enter distance - from "+minDist+" to "+maxDist+"", minDist, maxDist);
	console.log(race);
	validateForm(race.cCount, race.dist);
	allCars = createCars(race.cCount, race.dist);
	// return;
	// raceGoing();
	myFun = setInterval(clock, speed);
	// return;
}

function Car(pav) {
	this.number=pav;
	this.speed=0;
	this.dist=0;
}
//
startRace();
