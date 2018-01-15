// for (let i = 0; i < 10; i++) {
// 	let i = 100;
// 	console.log(i);
// }
// // desimt kart spausdina 100, nes du i skirtinguose scope'uose
// console.log(i);
// // bus klaida (i is not undefined), nes nebe scope'e kintamasis neegzistuoja
// for (var i = 0; i < 10; i++) {
// 	var i = 100;
// 	console.log(i);
// }
// // viena karta  atspausdina 100.
// // ciklas FOR su curly bracketais - scope'as scope'e - vienas scopas pacios FOR programos ir antras yra curly bracketuose.
// for (let i = 0; i < 10; i++) {
// 	var i = 100;
// 	console.log(i);
// }
// // raso klaida kad i has already been declared - apsaugo nuo nesamoniu.
// function test() {
// 	return	10;
// }
// let a = test();
// let b = test;
// let c = b();
// console.log(b());
// // spausdina 10, nes b rodo i ta pacia funkcija kaip test
// let m = {
// 	gam:'mazda',
// 	speed:0,
// 	accelerate: function() {
// 		this.speed+=5;
// 	},
// 	brake: function() {
// 		this.speed-=5;
// 	}
// };
// m.accelerate();
// console.log(m.speed);
// m.accelerate();
// console.log(m.speed);
// m.brake();
// console.log(m.speed);
// console.log('---');
// // this - tai yra kontekstas, specialus objektas
// let accelerate = function() {
// 	this.speed+=5;
// }
// let brake = function() {
// 	this.speed-=5;
// }
// let m1 = {
// 	gam:'mazda',
// 	speed:0,
// 	accelerate: accelerate,
// 	brake: brake,
// };
// let m2 = {
// 	gam:'lada',
// 	speed:0,
// 	accelerate: accelerate,
// 	brake: brake,
// };
// m1.accelerate();
// console.log(m1.speed);
// m1.accelerate();
// console.log(m1.speed);
// m2.accelerate();
// console.log(m2.speed);
// m1.brake();
// console.log(m1.speed);
// m2.accelerate();
// console.log(m2.speed);
// m2.brake();
// console.log(m2.speed);
// console.log('---');
// console.log(m1.speed);
// console.log(m2.speed);
// accelerate();
// console.log(window);
// // jeigu nenurodomas kontekstas - rodo i defaultini spec.objuekta window - narsyklese
// // global - node.js'e (isimta is narsykles js masinos)
// DOM - Document Object Model
// let html = {
// 	head: {
// 		title:'mano puslapis',
// 		script:'...',
// 	},
// 	body: {
// 		p:'....',
// 		h1:'..',
// 	}
// };
// window.document
// // - nuoroda i visa sita objekta. sukuriamas uz jus, narsykle sukuria, atspindi kas yra htmle
// window.document.title
// //- html puslapio pavadinima
// function start () {
// 	console.log(document.title);
// 	console.log(document.body);
// 	for (let i = 0; i < document.body.children.length; i++) {
// 		console.log(document.body.children[i].tagName);
// 	}
// }
// // veikia tik jeigu scriptas yra body tago gale. jeigu ikelti i head taga - scripto vykimo metu body dar nebus sukurta ir mes klaida.
// // event - ivykis (pajudinau pele, paspaudziau ant kazkokio elemento...), gai iskviesti funkcija. didzioji dauguma atveju turi veikti tik kai uzsikrove visas html'as.
// // ant kiekvieno evento mes galim parasyt funkcija, kuria narsykle iskvies.
// // jeigu prirasyti i body taga <body onload="start();"> - tada veiks net jeigu scriptas gules head'e
// su DOM elementais geriau nieko nedaryt pokolkas neivyko onload
// function peleJuda(evt) {
// 	console.log(evt.clientX);
// 	console.log(evt.clientY);
// }
// // aiskiau kad suprast koordinates:
// function peleJuda(evt) {
// 	console.log(evt.clientX, evt.clientY);
// }
// function peleJuda(evt) {
// 	console.log(evt.clientX, evt.clientY);
// 	console.log(evt.buvoPele);
// 	evt.buvoPele = true;
// }
// kai vyks DIVo cikle - bus undefined objectas dar. kai bus ant body - jau bus true reiksme - 4 eilutes bus is esmes.
// kai vyksta eventas-  fiziskai naudoja ta pati objekta
// EVENT BUBBLING. kiekvienas elementas jeigu jis gali handlinti eventa onmousemove - bus kvieciama sita funkcija.
// jiegu neaprasom evento ant tu elementu kur mums reikalingi, reikia tureti omenyje kad bubblinsis ir vyks funkcija - jeigu nesustabdysim - CANCEL BUBBLE
function peleJuda(evt) {
	console.log(evt.clientX, evt.clientY);
	evt.stopPropagation();
}
// stopPropagation - baigia bubblinimasi tik tame elemente
function start () {
	let d = document.createElement('div');
	document.body.appendChild(d);
	let t = document.createElement('h2');
	t.appendChild(document.createTextNode('Hello'));
	d.appendChild(t);
	console.log(t.parentNode);
}
