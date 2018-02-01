// scripta galima src nurodyti ir serveryje, nebutinai tame folderyje kur projektas guli
// window.onload = function() {
// 	alert( 'welcome' );
//
// };

// $ - sutrumpinimas nuo jQuery, kai iskvieciam $ - iskvieciam jQuery kintamaji - rodo i ta paca vieta
// pv jQuery.f1() === $.f1()

// $( document ).ready(function() {
// 	alert( 'welcome' );
// 	$( 'a' ).click(function( event ) {
// 		alert( 'As you can see, the link no longer took you to jquery.com' );
// 		event.preventDefault();
// 	});
// 	$( 'btn-list' ).click(function( event ) {
// 		$.get( 'http://192.168.1.81:8080/list' );
// 	});
//
// });

// tam kad keisti klases tam tikrai grupei elementu in pure JS reikia tokio kodo:
// gali buti classList.add / classList.toggle, priklausomai nuo to ko reikia
// reikia prirasyti paciam HTMLE i tag'a: onclick (testas();)
// function testas () {
// 	let list = document.getElementsByTagName('label');
// 	for (var i = 0; i < list.length; i++) {
// 		list[i].classList.toggle('red');
// 	}
// 	console.log('suveikia class change');
// }
// yra toks pat su hiddem  klase:
// function show () {
// 	let list = document.getElementsByTagName('form');
// 	for (var i = 0; i < list.length; i++) {
// 		list[i].classList.toggle("hidden");
// 	}
// 	console.log('suveikia class change');
// }
// ta pati su jQuery paprasciau:
// $(function() {
// 	$( '#btn-new' ).click(function() {
// 		$( 'form' ).toggleClass('hidden');
// 	});
// });
// $( 'div' );
// $( '.manoklase' );
// $( '#manoId' );
// - visi sitie variantas duoda rezultata SARASA
// $( '<div>' ); - sukuria nauja div elementa
// $( '<div><p>blabla</p></div>' ); - bei sudetingesnius dalykus irgi gali, skirtingus HTML objektus
// bet dar nera niekam priskirta - kaba DOMe siaip
// reikia kazkam priskirti pagal analogija kaip DOMo appendChild() metodas pvz:
// var d = $( '<div><p>blabla</p></div>' );
// $( '#mId' ).append(d);
// $( '#mId' ).append($( '<div>' ));
//
// $( '#mygt' ).mouseover() { - ant konkretaus elemento eventas
//	...
// }
//
// $( '.mygt' ).mouseover() { - ant visu klasiu mygtuku
//	...
// }
// JSON - stringas, i kuri irasytas objektas pagal tam tikras taisykles - su curly bracketais, kablialiais, dvitaskiais
// let o = {
// 	id: 5,
// 	vardas: 'jonas',
// 	pavarde: 'ne tokia grazi',
// 	m: ['a', true]
// };
// let s = JSON.stringify(o);
// console.log(s);
//
// let o1 = JSON.parse(s);
// console.log(o1);
// o1.id+= 10;
// console.log(o1);
// prideda 10 prie esamos reiksmes id propertyje: 5+10=15;

// AJAX leidzia neperkraunant puslapio siusti/gauti duomenis is serverio, palengvina komunikacija su serveriu.
// vietoj JSON yra alternatyva XML - turi savo niuansu, bet gerokai daugiau darbo su juo
// nera taip lengva isversti objektus i stringus ir atgal. kaip yra lengva su JSONU
// let str = '{"id":11, "userName":"nerbalionu", "eMail":"kazkokstaitest", "age":28}';
// $.ajax({
// 	url:'http://192.168.1.81:8080/update', // /list jeigu darai GET is serverio duomenis. /add jeigu naujas irasas
// 	data: str, // -nereikia kai GET darai
// 	contentType: 'application/json',
// 	type: 'POST', // -GET jeigu nori gauti is serverio
// 	dataType: 'json', // nereikia kai Get darai
// 	success: function(data) {
// 		console.log(data);
// 	}
// });
// $.ajax({
// 	url:'http://192.168.1.81:8080/list',
// 	type: 'GET',
// 	success: function(data) {
// 		console.log(data);
// 	}
// });



// CIA PRADZIA NORMALI


$( document ).ready( function() {
	alert( 'welcome' ); // - testui
	console.log('page ready, JS pasileidzia');

	let myNewForm = $( '<form name="serverForm" style="text-align:left;" action="index.html" method="post"><div class="row"><label for="user" class="col-md-2">Username </label><input id="user" class="col-md-2" type="text" name="user" placeholder="Username" /></div><div class="row"><label for="email" class="col-md-2">Email </label><input id="email" class="col-md-2" type="text" name="email" placeholder="Email" /></div><div class="row"><label for="age" class="col-md-2">Age </label><input id="age" class="col-md-2" type="numbers" name="age" placeholder="Age" /></div><div class="row"><input id="btn-post" class="col-md-2" type="button" name="post" value="Post"><input id="btn-cancel" class="col-md-2" type="reset" name="cancel" value="Cancel"></div></form>' );

	$( '#btn-new' ).click( function() {
		// alert('veikia formos sukurimas')
		$( '#forma' ).html('');
		$( '#forma' ).append(myNewForm);

		$( "#btn-post" ).click( function() {
			// alert("veikia postas");
			let user = document.forms["serverForm"]["user"].value;
			let email = document.forms["serverForm"]["email"].value;
			let uAge = document.forms["serverForm"]["age"].value;
			let form = {
				userName: user,
				eMail: email,
				age: parseInt(uAge)
			};
			let userEntry = JSON.stringify(form);
			console.log(userEntry);
			$.ajax({
				url:'http://192.168.1.81:8080/add',
				data: userEntry,
				contentType: 'application/json',
				type: 'POST',
				dataType: 'json',
				success: function(data) {
					console.log(data)
					console.log('posted data');
					$( myNewForm ).remove();
				}
				// list();
			});
			// list();
		});

		$( '#btn-cancel' ).click( function() {
			// alert("veikia cancel");
			$( myNewForm ).remove();
		});
	});


	$( '#btn-list' ).click( function list() {
		// alert('veikia listas');
		$( '#listLoad' ).html(''); // isvalo pradzioj paspaudimo visa lista, kad neappendintusi kiekviena karta naujas listas
		$.ajax({
			url:'http://192.168.1.81:8080/list',
			type: 'GET',
			success: function(result) {
				console.log(result);
				let output='<table><thead><tr><th>ID number</th><th>Username</th><th>eMail</th><th>age value</th></tr></thead><tbody>';
				for (var i in result) {
					output+="<tr class='"+result[i].id+"'><td>"+result[i].id+"</td><td id='tdUser"+result[i].id+"'>"+textify(result[i].userName)+"</td><td>"+textify(result[i].eMail)+ "</td><td>"+result[i].age+"</td><td><input data-updid="+result[i].id+" class='btn-upd' type='button' name='update' value='Update'></td><td><input data-fileid="+result[i].id+" class='btn-del' type='button' name='delete' value='Delete'></td></tr>";
				}
				output+="</tbody></table>";
				$( '#listLoad' ).append(output);

				$( '.btn-del' ).click(function(){
					console.log('veikia delete');
					event.stopPropagation();
					event.stopImmediatePropagation();
					var id=$(this).data('fileid');
					$( 'tr' ).remove('.'+id); // tik istrina lenteleje eilute, bet ne irasa serveryje
					// $.ajax({
					// 	url:'http://192.168.1.81:8080/delete',
					// 	type: 'POST',
					// 	success: function(result) {
					// }
				});

				$( '.btn-upd' ).click(function() {
					// alert('veikia iraso update');
					$( '#forma' ).html(''); // isvalo pradzioj paspaudimo visa lista, kad neappendintusi kiekviena karta naujas listas
					var id=$(this).data('updid');
					$.ajax({
						url:'http://192.168.1.81:8080/list',
						type: 'GET',
						success: function(result) {
							console.log(result);
							var output='<form name="serverForm" style="text-align:left;" action="index.html" method="post">';
							for (var i in result) {
								if(result[i].id==id) {
									output+= '<div class="row"><label for="id" class="col-md-2">ID </label><input id="id" class="col-md-2" type="text" name="id" value="'+result[i].id+'" /></div><div class="row"><label for="user" class="col-md-2">Username </label><input id="user" class="col-md-2" type="text" name="user" value="'+textify(result[i].userName)+'" /></div><div class="row"><label for="email" class="col-md-2">Email </label><input id="email" class="col-md-2" type="text" name="email" value="'+textify(result[i].eMail)+'" /></div><div class="row"><label for="age" class="col-md-2">Age </label><input id="age" class="col-md-2" type="numbers" name="age" value="'+result[i].age+'" /></div><div class="row"><input id="btn-update" class="col-md-2" type="button" name="update" value="Update"><input id="btn-cancel" class="col-md-2" type="reset" name="cancel" value="Cancel"></div></form>';
									$( '#forma' ).append(output);
								}
							}
							$( "#btn-update" ).click(function () {
								// alert("veikia update");
								let id = document.forms["serverForm"]["id"].value;
								let user = document.forms["serverForm"]["user"].value;
								let email = document.forms["serverForm"]["email"].value;
								let uAge = document.forms["serverForm"]["age"].value;
								let form = {
									id: parseInt(id),
									userName: user,
									eMail: email,
									age: parseInt(uAge)
								};
								let userEntry = JSON.stringify(form);
								console.log(userEntry);
								$.ajax({
									url:'http://192.168.1.81:8080/update',
									data: userEntry,
									contentType: 'application/json',
									type: 'POST',
									dataType: 'json',
									success: function(data) {
										console.log(data);
										$( serverForm ).remove();
										list ();
									}
								});
							});

							$( '#btn-cancel' ).click(function () {
								alert("veikia cancel");
								$( serverForm ).remove();
							});
						}
					});
				});
			}
		});
	});
	function textify( html ) {
    return $( $.parseHTML(html) ).text();
	}

		// $.ajax({
		// 	url:'http://192.168.1.81:8080/list',
		// 	type: 'GET',
		// 	success: function(result) {
		// 		console.log(result);
		// 		var output="<table><thead><tr><th>id number</th><th>Username</th><th>eMail value</th><th>age value</th></tr></thead><tbody>";
		// 		for (var i in result) {
		// 			output+="<tr><td>" + result[i].id + "</td><td>" + result[i].userName  + "</td><td>" + result[i].eMail + "</td><td>" + result[i].age + "</td><td><input class='btn-upd "+result[i].id+"' type='button' name='update' value='Update'></td><td><input class='btn-del "+result[i].id+"' type='button' name='delete' value='Delete'></td></tr>";
		// 		}
		// 		output+="</tbody></table>";
		// 		$( '#listLoad' ).append(output);
		// 	}
		// });
		// let updEntry = JSON.stringify(form);
		// $.ajax({
		// 	url:'http://192.168.1.81:8080/update',
		// 	data: updEntry,
		// 	contentType: 'application/json',
		// 	type: 'POST',
		// 	dataType: 'json',
		// 	success: function(data) {
		// 		console.log(data);
		// 	}




	// testui
	// $( 'a' ).click(function( event ) {
	// 	alert( "As you can see, the link no longer took you to jquery.com" );
	// 	event.preventDefault();
	// });

	// su XML iskviecia sarasa i p
	// $( "#btn-list" ).click(function () {
	// 	alert( "veikia" );
	// 	var xhttp = new XMLHttpRequest();
	// 	xhttp.onreadystatechange = function() {
	// 		if (this.readyState == 4 && this.status == 200) {
	// 			document.getElementById('listLoad').innerHTML = this.responseText;
	// 		}
	// 	};
	// 	xhttp.open('GET', 'http://192.168.1.81:8080/list', true);
	// 	xhttp.send();
	// });
});
