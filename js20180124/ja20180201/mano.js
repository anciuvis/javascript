// nuejom i DOMa, uzkrovem viska body, ir tik po to kviecia sita funkcija
// Shorthand for $( document ).ready():
$(function() {
	// $( '#...' ) - grazina sarasa, su vienu objektu (pagal ID) sarase. tam vienam elementui uzdedama funkcija click'o
	$( '#listButton' ).click( showList );
	$( '#newButton' ).click( addRecord );
});
let allData = []; //globalus kintamasis

// galime aprasyti sitas funkcijas isoreje nuo document ready dalies, vykdys jas tik kai kviesim viduje, bet bus pasiekiamos visur
// kad butu pagrindiniam scope, kad neapterstu atminties, jei butu document-ready scopo viduj - tas scopas nemirtu, uzimtu atminti
function showList () {
	// alert ('list');
	$( '#myContent' ).empty();
	$.ajax({
		type: 'GET',
		url:'http://192.168.1.81:8080/list',
		// sita funkcija asinchronine - nezinom kada baigsis (ilgai krausis nuotolinis servas)
		// - paleidom uzklausa i serveri, ir tuom baigaisi darbas - funkcija showList atidirbo
		// kai gaunam atsakyma (success/error) - tada isijungia viena is dvieju situ funkciju priklausomai nuo atsakymo
		success: function (data) {
			console.log(data);
			allData = data;
			// sukuria objekta ir ji grazina i RAMa (ne DOMa)
			let table = $( '<table>' );
			for (let i in data) {
				// <tr> taip pat kaba Rame kaip tuscias objektas - ne DOMe dar
				let row = $( '<tr>' );
				// <td> irgi kaba atskirai, ne DOMe, ne <tr> dar
				let cell = $( '<td>' );
				// pridedam i vidu sito cello reiksme konkretaus pirmo elemento id reiksme
				cell.text(data[i].id);
				// surisam tr su td - padedam i vidu ji:
				row.append(cell);
				cell = $( '<td>' );
				cell.text(data[i].userName);
				row.append(cell);
				cell = $( '<td>' );
				cell.text(data[i].eMail);
				row.append(cell);
				cell = $( '<td>' );
				cell.text(data[i].age);
				row.append(cell);
				cell = $( '<td>' );
				let updButton = $( '<button>Update</button>' );
				cell.append(updButton);
				row.append(cell);
				updButton.attr('value',data[i].id);
				updButton.click(updRecord);
				cell = $( '<td>' );
				let delButton = $( '<button>Delete</button>' );
				cell.append(delButton);
				row.append(cell);
				delButton.attr('value',data[i].id);
				delButton.click(delRecord);
				// table suzino apie pirma eilute:
				table.append(row);
				// pirmoj iteracijos pabaigoje mirsta kintamieji row bei cell, bet ne table - jis uz ciklo ribu, su nuorodom i appendinus objektus
			}
			$( '#myContent' ).append(table);
		},
		error: function (response) { // response - arba narsykle sugeneruota, arba serverio atsakymas
			alert('Error: '+response);
		}
	});
}
function addRecord () {
	// alert ('new');
	$( '#myContent' ).empty();
	let formDiv = $( '<div>' );
	formDiv.append($( '<h4>User Name:</h4>' ));
	formDiv.append($( '<input id="userName">'));
	formDiv.append($( '<p>' ));
	formDiv.append($( '<h4>Email address:</h4>' ));
	formDiv.append($( '<input id="eMail">'));
	formDiv.append($( '<p>' ));
	formDiv.append($( '<h4>Your age:</h4>' ));
	formDiv.append($( '<input id="age">'));
	formDiv.append($( '<p>' ));
	$( '#myContent' ).append(formDiv);
	let saveButton = $( '<button>Save</button>' );
	saveButton.click(saveClick);
	formDiv.append($( saveButton ));
	let cancelButton = $( '<button>Cancel</button>' );
	cancelButton.click(cancelClick);
	formDiv.append($( cancelButton ));
}
function saveClick() {
	// alert ('save');
	let entry = {
		userName: $( '#userName' ).val(),
		eMail: $( '#eMail' ).val(),
		age: parseInt($( '#age' ).val())
	};
	entry = JSON.stringify(entry);
	$.ajax({
		type: 'POST',
		url:'http://192.168.1.81:8080/add',
		contentType: 'application/json',
		data: entry,
		dataType: 'json',
		success: function(data) {
			if (data.error) {
				alert(data.error);
			} else {
				showList();
			}
		},
		error: function (response) {
			alert('Error: '+response);
		}
	});
}
function cancelClick() {
	$( '#myContent' ).empty();
	showList();
}
function updRecord() {
	alert('upd '+this.value);
	let o;
	for (var i = 0; i < allData.length; i++) {
		if (allData[i].id==this.value) {
			o = allData[i];
			break;
		}
	}
	$( '#myContent' ).empty();
	let formDiv = $( '<div>' );
	formDiv.append($( '<h4>User Name:</h4>' ));
	formDiv.append($( '<input id="userName">'));
	formDiv.append($( '<p>' ));
	formDiv.append($( '<h4>Email address:</h4>' ));
	formDiv.append($( '<input id="eMail">'));
	formDiv.append($( '<p>' ));
	formDiv.append($( '<h4>Your age:</h4>' ));
	formDiv.append($( '<input id="age">'));
	formDiv.append($( '<p>' ));
	$( '#myContent' ).append(formDiv);
	$( '#userName' ).val(o.userName);
	$( '#eMail' ).val(o.eMail);
	$( '#age' ).val(o.age);
	let postUpdButton = $( '<button>Post Update</button>' );
	postUpdButton.click(postUpdClick);
	formDiv.append($( postUpdButton ));
	let cancelButton = $( '<button>Cancel</button>' );
	cancelButton.click(cancelClick);
	formDiv.append($( cancelButton ));
}
function delRecord() {
	let recordToDelete = {
		id: parseInt(this.value)
	};
	recordToDelete = JSON.stringify(recordToDelete);
	$.ajax({
		type: 'POST',
		url:'http://192.168.1.81:8080/delete',
		contentType: 'application/json',
		data: recordToDelete,
		dataType: 'json',
		success: function(data) {
			if (data.error) {
				alert(data.error);
			} else {
				showList();
			}
		},
		error: function (response) {
			alert('Error: '+response);
		}
	});
}
function postUpdClick() {
	alert('veikia post update');
}
