// nuejom i DOMa, uzkrovem viska body, ir tik po to kviecia sita funkcija
// Shorthand for $( document ).ready():
$(function() {
	// $( '#...' ) - grazina sarasa, su vienu objektu (pagal ID) sarase. tam vienam elementui uzdedama funkcija click'o
	$( '#listButton' ).click( showList );
	$( '#newButton' ).click( addRecord );
});

// galime aprasyti sitas funkcijas isoreje nuo document ready dalies, vykdys jas tik kai kviesim viduje, bet bus pasiekiamos visur
// kad butu pagrindiniam scope, kad neapterstu atminties, jei butu document-ready scopo viduj - tas scopas nemirtu, uzimtu atminti
function showList () {
	alert ('list');
	$( '#myContent' ).empty();
	$.ajax({
		type: 'GET',
		url:'http://192.168.1.81:8080/list',
		// sita funkcija asinchronine - nezinom kada baigsis (ilgai krausis nuotolinis servas)
		// - paleidom uzklausa i serveri, ir tuom baigaisi darbas - funkcija showList atidirbo
		// kai gaunam atsakyma (success/error) - tada isijungia viena is dvieju situ funkciju priklausomai nuo atsakymo
		success: function (data) {
			console.log(data);
			// sukuria objekta ir ji grazina i RAMa (ne DOMa)
			let table = $('<table>');
			for (let i in data) {
				// <tr> taip pat kaba Rame kaip tuscias objektas - ne DOMe dar
				let row = $('<tr>');
				// <td> irgi kaba atskirai, ne DOMe, ne <tr> dar
				let cell = $('<td>');
				// pridedam i vidu sito cello reiksme konkretaus pirmo elemento id reiksme
				cell.text(data[i].id);
				// surisam tr su td - padedam i vidu ji:
				row.append(cell);
				cell = $('<td>');
				cell.text(data[i].userName);
				row.append(cell);
				cell = $('<td>');
				cell.text(data[i].eMail);
				row.append(cell);
				cell = $('<td>');
				cell.text(data[i].age);
				row.append(cell);
				// table suzino apie pirma eilute:
				table.append(row);
				// pirmoj iteracijos pabaigoje mirsta kintamieji row bei cell, bet ne table - jis uz ciklo ribu, su nuorodom i appendinus objektus
			}
			$('#myContent').append(table);
		},
		error: function (response) { // response - arba narsykle sugeneruota, arba serverio atsakymas
			alert('Error: '+response);
		}
	});
}
function addRecord () {
	alert ('new');
}
