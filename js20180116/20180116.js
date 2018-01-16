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
