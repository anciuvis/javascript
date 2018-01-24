// scripta galima src nurodyti ir serveryje, nebutinai tame folderyje kur projektas guli
// window.onload = function() {
// 	alert( "welcome" );
//
// };

// $ - sutrumpinimas nuo jQuery, kai iskvieciam $ - iskvieciam jQuery kintamaji - rodo i ta paca vieta
// pv jQuery.f1() === $.f1()

// $( document ).ready(function() {
// 	alert( "welcome" );
// 	$( "a" ).click(function( event ) {
// 		alert( "As you can see, the link no longer took you to jquery.com" );
// 		event.preventDefault();
// 	});
// 	$( "btn-list" ).click(function( event ) {
// 		$.get('http://192.168.1.81:8080/list',);
// 	});
//
// });

// tam kad keisti klases tam tikrai grupei elementu in pure JS reikia tokio kodo:
// gali buti classList.add / classList.toggle, priklausomai nuo to ko reikia
// reikia prirasyti paciam HTMLE i tag'a: onclick (testas();)
// function testas () {
// 	let list = document.getElementsByTagName('label');
// 	for (var i = 0; i < list.length; i++) {
// 		list[i].classList.toggle("red");
// 	}
// 	console.log('suveikia class change');
// }
// ira toks pat su hiddem  klase:
// function show () {
// 	let list = document.getElementsByTagName('form');
// 	for (var i = 0; i < list.length; i++) {
// 		list[i].classList.toggle("hidden");
// 	}
// 	console.log('suveikia class change');
// }
// ta pati su jQuery paprasciau:
$(function() {
	$('#btn-new').click(function() {
		$('form').toggleClass('hidden');
	});
});
// $('div');
// $('.manoklase');
// $(#manoId);
// - visi sitie variantas duoda rezultata SARASA
// $('<div>'); - sukuria nauja div elementa
// $('<div><p>blabla</p></div>'); - bei sudetingesnius dalykus irgi gali, skirtingus HTML objektus
// bet dar nera niekam priskirta - kaba DOMe siaip
// reikia kazkam priskirti pagal analogija kaip DOMo appendChild() metodas pvz:
// var d = $('<div><p>blabla</p></div>');
// $('#mId').append(d);
// $('#mId').append($('<div>'));
//
// $('#mygt').mouseover(){ - ant konkretaus elemento eventas
//	...
// }
//
// $('.mygt').mouseover(){ - ant visu klasiu mygtuku
//	...
// }


$( document ).ready(function() {
	alert( "welcome" );
	$( "a" ).click(function( event ) {
		alert( "As you can see, the link no longer took you to jquery.com" );
		event.preventDefault();
	});
	$( "#btn-list" ).click(function () {
		alert( "veikia" );
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("listLoad").innerHTML = this.responseText;
			}
		};
		xhttp.open("GET", "http://192.168.1.81:8080/list", true);
		xhttp.send();
	});
});
