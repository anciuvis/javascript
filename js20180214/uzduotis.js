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
//
// let minDist = 1;
// let maxDist = 100;
// let minCount = 1;
// let maxCount = 5;
// let speedShow = 500;
// let speedSpeed = 2000;
// let allCars = [];
// let myFun;
// let cumulDist = 0;
// let speedChange;
//
// function getRandomInt(max) {
// 	return Math.floor(Math.random() * Math.floor(max));
// }
//
// function validateForm(cCount, dist) {
// 	console.log('Validate prasideda');
// 	let DigOnly = /^[0-9][0-9]*$/;
// 	if (DigOnly.test(cCount)) {
// 		console.log('car count yra skaicius');
// 	} else {
// 		console.log('car count nera skaicius');
// 		alert('car count must be a number');
// 		return;
// 	}
// 	if (DigOnly.test(dist)) {
// 		console.log('dist yra skaicius');
// 	} else {
// 		console.log('dist nera skaicius');
// 		alert('car count must be a number');
// 		return;
// 	}
// }
//
// function request(message, min, max) {
// 	let amount;
// 	do {
// 		amount = parseInt(window.prompt(message));
// 	}
// 	while(isNaN(amount) == true || amount < min || amount > max);
// 	return amount;
// }
//
// function createCars(cCount, dist) {
// 	let a = [];
// 	for (let i = 0; i < cCount; i++) {
// 		a[i] = new Car(i);
// 	}
// 	console.log(a);
// 	return a;
// }
//
// function clock() {
// 	allCars.sort(compareDist);
// 	console.log(allCars[0].dist);
// 	cumulDist = allCars[0].dist;
// 	if (cumulDist < race.dist) {
// 		console.log('ok');
// 		raceGoing();
// 	} else {
// 		console.log('zaidimo pabaiga');
// 		clearInterval(myFun);
// 		// myFun = null;
// 		// cumulDist = 0;
// 	}
// }
//
// function raceGoing() {
// 	// cumulDist++;
// 	// console.log(cumulDist);
// 	let count = 1;
// 	for (let i = 0; i < allCars.length; i++) {
// 		speedChange= getRandomInt(6)*Math.random() < 0.5 ? -1 : 1;
// 		allCars[i].speed = Math.min(150,Math.max(0, allCars[i].speed+speedChange));
// 		allCars[i].dist += allCars[i].speed*(count/7200);
// 		console.log(i+" masinos atstumas "+allCars[i].dist+" km");
// 		console.log(i+" masinos greitis "+allCars[i].speed+" km/h");
//
// 	}
//
// }
//
//
//
// function compareDist(a,b) {
// 	if (a.dist < b.dist)
// 		return -1;
// 	if (a.dist > b.dist)
// 		return 1;
// 	return 0;
// }
//
//
// function startRace() {
// 	console.clear();
// 	race = new Object();
// 	race.cCount = request("Enter car count - from "+minCount+" to "+maxCount+"", minCount, maxCount);
// 	race.dist = request("Enter distance - from "+minDist+" to "+maxDist+"", minDist, maxDist);
// 	console.log(race);
// 	validateForm(race.cCount, race.dist);
// 	allCars = createCars(race.cCount, race.dist);
// 	// return;
// 	// raceGoing();
//
// 	myFun = setInterval(clock, speedShow);
// 	// return;
// }
//
// function Car(name) {
// 	this.name=name;
// 	this.speed=0;
// 	this.dist=0;
// }
// //
// startRace();

//DESTYTOJO SPRENDIMAS
function Car(name, lane) {
	this.name=name;
	this.speed=0;
	this.dist=0;
	this.lane=lane;
	this.cardiv=$("<div style='top: 0; left:"+this.lane*25+"px; width: 20px; height: 20px; border: solid 1px green;'></div>");
	this.cardiv.appendTo(document.body);
}

Car.prototype.speedup = function(s) {
	this.speed+=s;
	if (this.speed > 150) {
		this.speed = 150;
	}
}
Car.prototype.slowdown = function(s) {
	this.speed-=s;
	if (this.speed<0) {
		this.speed = 0;
	}
}
Car.prototype.move = function(t) {
	this.dist+=this.speed*t;
}

let rd;
let allCars=[];
let riid;
let siid;
let cc = prompt("enter car count", 5);
cc = parseInt(cc);
if (cc>0) {
	rd = prompt("enter race distance", 500);
	if (rd>0) {
		riid = setInterval(race, 500);
		siid = setInterval(speedChange, 2000);
		for (let i = 0; i < cc; i++) {
			allCars.push(new Car("Car"+i, i));
		}
	} else {
		alert ('bad Race distance!');
	}
} else {
	alert('bad Car count!');
}

function speedChange() {
	for (let i = 0; i < allCars.length; i++) {
		if(Math.random()>=0.5){
			allCars[i].speedup (Math.round(Math.random()*5));
		} else {
			allCars[i].slowdown (Math.round(Math.random()*5));
		}
	}
}
function race() {
	let winner= -1;
	for (let i = 0; i < allCars.length; i++) {
		allCars[i].move(0.5);
		console.log('Car: '+allCars[i].name+' speed: '+allCars[i].speed+' distance: '+allCars[i].dist+' lane: '+allCars[i].lane+);
		if (allCars[i].dist>=rd) {
			winner=i;
			break;
		}
	}
	if (winner>=0) {
		clearInterval(riid);
		clearInterval(siid);
		console.log('the winner is '+winner+' car');
	}
	for (let i = 0; i < allCars.length; i++) {
		console.log('Car '+allCars[i].name+' speed'+allCars[i].speed+' distance'+allCars[i].dist+' lane: '+allCars[i].lane+);
	}
}
