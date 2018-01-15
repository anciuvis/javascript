for (let i = 0; i < 10; i++) {
	let i = 100;
	console.log(i);
}
// desimt kart spausdina 100, nes du i skirtinguose scope'uose
console.log(i);
//bus klaida (i is not undefined), nes nebe scope'e kintamasis neegzistuoja
for (var i = 0; i < 10; i++) {
	var i = 100;
	console.log(i);
}
// viena karta  atspausdina 100.
// ciklas FOR su curly bracketais - scope'as scope'e - vienas scopas pacios FOR programos ir antras yra curly bracketuose.
// for (let i = 0; i < 10; i++) {
// 	var i = 100;
// 	console.log(i);
// }
// raso klaida kad i has already been declared - apsaugo nuo nesamoniu.
function test() {
	return	10;
}
let a = test();
let b = test;
let c = b();
console.log(b());
// spausdina 10, nes b rodo i ta pacia funkcija kaip test
let m = {
	gam:'mazda',
	speed:0,
	accelerate: function() {
		this.speed+=5;
	},
	brake: function() {
		this.speed-=5;
	}
};
m.accelerate();
console.log(m.speed);
m.accelerate();
console.log(m.speed);
m.brake();
console.log(m.speed);
console.log('---');
// this - tai yra kontekstas, specialus objektas
let accelerate = function() {
	this.speed+=5;
}
let brake = function() {
	this.speed-=5;
}
let m1 = {
	gam:'mazda',
	speed:0,
	accelerate: accelerate,
	brake: brake,
};
let m2 = {
	gam:'lada',
	speed:0,
	accelerate: accelerate,
	brake: brake,
};
m1.accelerate();
console.log(m1.speed);
m1.accelerate();
console.log(m1.speed);
m2.accelerate();
console.log(m2.speed);
m1.brake();
console.log(m1.speed);
m2.accelerate();
console.log(m2.speed);
m2.brake();
console.log(m2.speed);
console.log('---');
console.log(m1.speed);
console.log(m2.speed);
accelerate();
console.log(window);
// jeigu nenurodomas kontekstas - rodo i defaultini spec.objuekta window - narsyklese
// global - node.js'e (isimta is narsykles js masinos)
