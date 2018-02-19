// OBJEKTINIS PROGRAMAVIMAS
// principai
let a = {
	p1: true,
	p2: 10,
	p3: {
		p31: "Hello",
		p32: "World"
	}
	p4: "Mano Objektas"
};
// fiziskai - 5 reiksmes. galejom kurti 1 objekta su 5 properties (savybemis).
// galejom kurti 5 kintamuosius, be objekto. BET
// kad  atskirti kieno yra savybes - grupuojama i objekta (konkrecios masinos pvz, tam tikro variklio i t.p.)
// objektas ne tik turi savybes, jis gali kazka daryti (kaip ir gyvenime):
// masina gali vaziuot, stabdyt, uzvest varikli, uzgesinti. ir t.t.
// rezultatas gali but tas pats - uzsivede variklis, bet veiksmai tam atlikti gali buti skirtingi
// reikia generalizuoti
// abidvi masinos turi vienodas savybes (kaip ir kitos lengvosios)
// rinkinys turimu savybiu objekto, ir veiksmu, kuriuos objektas gali daryt - KLASE
// savybe masinos Greitis - daznai kintanti. Spalva - retai kinta
// programavimo prasme - Savybe kintanti (kaip greitis) ar nekintanti (kaip gam.metai) - neturi reiksmes
// properties nurodo objekto bukle aplamai
//
// vienodos masinos, bet ne tos pacios:
let m0 = {
	marke: 'Mazda 3',
	greitis: 0
};
let m1 = {
	marke: 'Mazda 3',
	greitis: 0
};
// sukuriamas pagreitis vienai masinai
m1.speedup = function(s) {
	this.greitis += s;
};
m1 = {
	marke: 'Mazda 3',
	greitis: 0,
	speedup: mspeedup
};
// ir kitai masinai reik taip tap, nes jos gi vienodos, ir savybes logiskai turi buti tos pacios:
m0.speedup = function(s) {
	this.greitis += s;
};
m0 = {
	marke: 'Mazda 3',
	greitis: 0,
	speedup: mspeedup
};
// sukuriam bendra funkcija, kad nereiktu keisti keikvienai masinai atskirai savybes speedup reiksmes
let mspeedup = function(s) {
	this.greitis += s;
};
m0.speedup = mspeedup;
m1.speedup = mspeedup;
// jeigu gazuoja, tai ir stabdyti turi moket:
let mslowdown = function(s) {
	this.greitis -= s;
};
m0.slowdown = mslowdown;
m0 = {
	marke: 'Mazda 3',
	greitis: 0,
	speedup: mspeedup,
	slowdown: mslowdown
};
m1.slowdown = mslowdown;
m1 = {
	marke: 'Mazda 3',
	greitis: 0,
	speedup: mspeedup,
	slowdown: mslowdown
};
// rinkinys savybiu ir funkcionalumu - KLASE (iskaitant tas 'reiksmes' kr vienodos funkcijos - viso mazdos stabdo vienodai ((teoriskai)
// speedup ir slowdown - metodu pavadinimai
// BUSENA - reiksmes tu savybiu, bet be vienodu funkciju,
//
// nuo biologijos hierarchija ta pati - klases, karalystes ir t.t.
// priklauso ir zmones ir pauksciai tai paciai klasei - gyvunai
// (siltas kraujas (kuris atlieka ta pacia funkcija), turim organus(sirdis, skrandi ir t.p.))
// kazka turim bendro, bet kazkas jau ir skirtingo - mes nededam kiausiniu
// zmones - KLASE, vienas zmogus - OBJEKTAS
// pradziai apsirasom KLASE (savybiu sarasa)
// ir iskart galim sukurti default tip reiksmes savybems (tarkim greitis pradinis visad nulis)
// KAIP KURIAMI OBJEKTAI
// su masinom - tai mes patys surasem, kai jie turi vienodas savybes, bet realiai jie dabar nera susije
// kaip padaryt jas tos pacios klases?
// kaip JAVOJ atrodytu
class Car {
	string marke;
	int greitis;
	Car(string pavadinimas) {
		this.marke=pavadinimas;
		this.greitis=0;
	}
	void speedup(int s) {
		this.greitis+=s;
	}
	void slowdown(int s) {
		this.greitis+=s;
	}
}
// Car(string pavadinimas) - konstruktorius (klases)
// - funkcija kuri kvieciama kai kuriamas objektas, kad inicializuoti pradines reiksmes
Car c1 = new Car("FordT");
c1.speedup(10);
//
class Bus extends Car {
	int pc;
	Bus (int sc, string pav) {
		super(pav);
		this.pc=sc;
	}
	void loadP(int c) {
		this.pc+=c;
	}
	void unloadP(int c) {
		this.pc-=c;
	}
 }
//
Bus b1 = new Bus(15, "Volvo");
b1.speedup(10);
// ENKAPSULIACIJA - viskas, ka susije su objekto savybem - sudedam i viena kruva (ka jis moka, kokia spalva tt)
// tai, kad autobusas yra ir masina tuo paciu - PAVALDUMAS
// endof JAVA aprasymas :D
// JavaScript naudoja prototipu metoda, siek tiek kitoki objektini programavima -galima pridaryti daugiau
// bet tai nera grieztas objektinis per se
// JS objektas kuriamas su funkcija (kaip ir Javoj su konstruktorium)
// tik JS nera specali funkcija. bet kokia funkcija teoriskai galibuti ja
//
function Car(pav) {
	this.marke=pav;
	this.greitis=0;
}
let c1 = new Car("FordT");
// kai konstruktorius yra kvieciamas su New - jis pakisa i konteksta this. - ta nauja objekta c1
// ir net jei pati funkcija nieko negrazina - su New grazinamas tas naujas objektas
let m1 = new Car("Mazda 3");
let m2 = new Car("Mazda 3");
// svarbus dalykas - kuom skiriasi nuo pradzios tu masinu - dabar visi sitie objektai atsimena kad jie yra Car
// __proto__ - savybe kuri yra nematoma siaip. prototipas
// m1.speedup(10) - cia dar nemoka gazuoti
Car.prototype.speedup=function(s){
	this.greitis+=s;
};
// m1.speedup(10) - cia jau moka gazuoti
// funkcija - yra objektas (special). turi savybe prototype
// prototype - tai objektas, kuri paveldi visi priklausantys siai klasei
// jeigu parasyti ta pati kaip atskira funkcija - tai tik ta pati viena masina ismoktu gazuoti
// Car.prototype.speedup - nurodo kad klasei aprasoma savybem
//
