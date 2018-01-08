// var d=prompt('ivesk kazka','default');
// console.log(d);
// var d=prompt('ivesk skaiciu');
// console.log(d);
// console.log(typeof d);
// typeof operatorius grazina kintamojo reiksmes tipa (string, number, objektas, undefined). ! NIUANSAS SVARBUS - typeof null reiksme - yra OBJECT ????!!!!! :)
// d=d+10;
// = yra operatorius, + yra operatorius su dviem operandais (d ir 10)
// console.log(d);
// Java - grieztai tipizuota kalba, C - maziau tipizuota bet irgi tipizuota, JS - lengvai tipizuota. d buvo string, priskyrem skaiciu - patapo skaicium, nera problemu JSui
// google - normalus kiekvieno programuotojo irankis, reikia moreti naudotis.
//
// do {
// var d=prompt('ivesk skaiciu');
// var s=parseInt(d);
// } while (isNaN(s));
// console.log(s, typeof s);
// s=s+10;
// console.log(s);
//
// do {
//   var a=prompt('ivesk pirma skaiciu');
//   var a1=parseInt(a);
// } while (isNaN(a1));
// do {
//   var b=prompt('ivesk antra skaiciu');
//   var b1=parseInt(b);
// } while (isNaN(b1));
// do {
//   var c=prompt('ivesk trecia skaiciu');
//   var c1=parseInt(c);
// } while (isNaN(c1));
// do {
//   var d=prompt('ivesk ketvirta skaiciu');
//   var d1=parseInt(d);
// } while (isNaN(d1));
// console.log(a1+b1+c1+d1);
//
// function numberInput(n, prReiksme) {
//   do {
//     var a=prompt('ivesk '+n+'-aji skaiciu', prReiksme);
//     a=parseInt(a);
//   } while (isNaN(a));
//   console.log(a);
  // iki sios vietos dar saugo a reiksme, todel gali loginti consoleje, po Returno - istrina is atminties
//   return a;
// }
// var a1=numberInput(1,0);
// var a2=numberInput(2,a1);
// var a3=numberInput(3,a1+a2);
// var a4=numberInput(4,a1+a2+a3);
// console.log(a1+a2+a3+a4);
// var f=numberInput;
// numberInput su skliausteliais reiskia kad as turiu gauti funkcijos rezultata. be skliaustu - perduoda nuoroda i ta pacia funkcija kaip pradinis vardas
// console.log(typeof f);
// var a1=f(1,0);
// var a2=f(2,a1);
// var a3=f(3,a1+a2);
// var a4=f(4,a1+a2+a3);
// console.log(a1+a2+a3+a4);
// var a1=numberInput(3,4,5) - tas penketas neaisku kur eisk, kadangi funkcijoje nurodyta tik 2 parametrai (n, prReiksme)
//
// Objektinis programavimas. Kas yra objektai.
// pvz Automobilis - savybes: gamintojas, spalva, metai, modelis... Savybiu rinkinys - tai KLASE programavime.
// Konkreti masina su konkreciom savybemis (Mazda, Pilka, 2005, 3)- OBJEKTAS. Kita masina (Zigulis, Zalia, 1979, 21011) - kitas OBJEKTAS, priklauso tai paciai KLASEI
// var m1={
//   gamintojas:'Mazda',
//   spalva:'pilka',
//   metai:2005,
//   modelis:'3',
// }
// console.log(m1.spalva);
// m1.spalva='raudona';
// var m2=m1;
// m2.spalva='zalia';
// console.log(m1.spalva);
//pakeitem spalva m2 objekte, bet keiciasi m1 irgi, nes jie turi nuoroda i ta pati objekta
// m2.dsk=5;
// console.log(m1.dsk);
// atspausdina 5
// console.log(m1.rsk);
//duos rezultata undefined
// console.log(typeof m1);
// spausdina Object
// var m2={
//   gamintojas:'Zigulys',
//   spalva:'zalias',
//   metai:1979,
//   modelis:'21011'
// }
// m1=m2;
// panaikinamas rysys savybes m1, Javascripte automatiskai juos istrina 'siukslininkas' Garbage collector. Javoj galima priverstinai paleisti sita Garbage collectoriu
// console.log(m1.spalva);
//spausdina zalias
//objektai atmintyje yra sukuriami automatiskai, automatiskai jie yra ir istrinami, kai nebeuztenka atminties cia JS padaro darba uz mus
var m1={
  gamintojas:'Mazda',
  spalva:'pilka',
  metai:2005,
  modelis:'3',
  variklis:{
    kt:'benzinas',
    turis:1.6
  }
}
// variklis - kitas objektas, irgi nuoroda sekanti
console.log(m1.variklis.kt);
// spausdina kuro tipa
var m2={
  gamintojas:'Zigulis',
  spalva:'zalias',
  metai:21011,
  modelis:'3'
}
m2.variklis=m1.variklis;
m2.variklis.turis=2.2;
console.log(m1.variklis.turis);
// tapo 2.2, nes jie rodo i ta pati objekta, keiciasi tas pats objektas atminty
m1=null;
//objektas variklis nera ismetamas garbage collectoriaus, nes i ji yra nuorodos is m2, vadinas palieka atmintyje. o mazda istrina (gamintoja,spalva,metai,modelis)
// objektas turi sqavybes, kaip kintamijei jie: gali buti kaiciai, stringai, kiti objektai, funkcijos
//string yra objektas atmintyje. Immutable.
var s='string';
