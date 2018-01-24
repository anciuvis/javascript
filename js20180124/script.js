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
function testas () {
	let list = document.getElementsByTagName('label');
	for (var i = 0; i < list.length; i++) {
		list[i].classList.toggle("red");
	}
	console.log('suveikia class change');
}

function show () {
	let list = document.getElementsByTagName('form');
	for (var i = 0; i < list.length; i++) {
		list[i].classList.toggle("hidden");
	}
	console.log('suveikia class change');
}
