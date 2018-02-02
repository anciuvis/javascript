// nuejom i DOMa, uzkrovem viska body, ir tik po to kviecia sita funkcija
// Shorthand for $( document ).ready():
$(function() {
	// $( '#...' ) - grazina sarasa, su vienu objektu (pagal ID) sarase. tam vienam elementui uzdedama funkcija click'o
	$( '#listButton' ).click( showList );
	$( '#newButton' ).click( addRecord );
});
let allData = []; //globalus kintamasis
// localStorage.removeItem('data');
let allLocalData = JSON.parse(localStorage.getItem('data'));
	if(!allLocalData) {
		allLocalData = [];
	}
// let currentKeys;
// galime aprasyti sitas funkcijas isoreje nuo document ready dalies, vykdys jas tik kai kviesim viduje, bet bus pasiekiamos visur
// kad butu pagrindiniam scope, kad neapterstu atminties, jei butu document-ready scopo viduj - tas scopas nemirtu, uzimtu atminti
function showList () {
	$( '#myContent' ).empty();
	formList(allLocalData);
	// $.ajax({
	// 	type: 'GET',
	// 	url:'http://192.168.1.81:8080/list',
	// 	// sita funkcija asinchronine - nezinom kada baigsis (ilgai krausis nuotolinis servas)
	// 	// - paleidom uzklausa i serveri, ir tuom baigaisi darbas - funkcija showList atidirbo
	// 	// kai gaunam atsakyma (success/error) - tada isijungia viena is dvieju situ funkciju priklausomai nuo atsakymo
	// 	success: function (data) {
	// 		console.log(data);
	// 		allData = data;
	// 		// sukuria objekta ir ji grazina i RAMa (ne DOMa)
	// 		let table = $( '<table>' );
	// 		for (let i in data) {
	// 			// <tr> taip pat kaba Rame kaip tuscias objektas - ne DOMe dar
	// 			let row = $( '<tr>' );
	// 			// <td> irgi kaba atskirai, ne DOMe, ne <tr> dar
	// 			let cell = $( '<td>' );
	// 			// pridedam i vidu sito cello reiksme konkretaus pirmo elemento id reiksme
	// 			cell.text(data[i].id);
	// 			// surisam tr su td - padedam i vidu ji:
	// 			row.append(cell);
	// 			cell = $( '<td>' );
	// 			cell.text(data[i].userName);
	// 			row.append(cell);
	// 			cell = $( '<td>' );
	// 			cell.text(data[i].eMail);
	// 			row.append(cell);
	// 			cell = $( '<td>' );
	// 			cell.text(data[i].age);
	// 			row.append(cell);
	// 			cell = $( '<td>' );
	// 			let updButton = $( '<button>Update</button>' );
	// 			cell.append(updButton);
	// 			row.append(cell);
	// 			updButton.attr('value',data[i].id);
	// 			updButton.click(updRecord);
	// 			cell = $( '<td>' );
	// 			let delButton = $( '<button>Delete</button>' );
	// 			cell.append(delButton);
	// 			row.append(cell);
	// 			delButton.attr('value',data[i].id);
	// 			delButton.click(delRecord);
	// 			// table suzino apie pirma eilute:
	// 			table.append(row);
	// 			// pirmoj iteracijos pabaigoje mirsta kintamieji row bei cell, bet ne table - jis uz ciklo ribu, su nuorodom i appendinus objektus
  //
	// 		}
	// 		$( '#myContent' ).append(table);
	// 	},
	// 	error: function (response) { // response - arba narsykle sugeneruota, arba serverio atsakymas
	// 		alert('Error: '+response);
	// 	}
	// });
}
function addForm(o) {
	$( '#myContent' ).empty();
	let formDiv = $( '<div>' );
	formDiv.append($( '<p>' ));

	let idInput = $('<input>');
	if (o) {
		idInput.val(o.id);
		idInput.attr('id','idNr');
		idInput.attr('type','hidden');
		formDiv.append($( idInput ));
	}

	formDiv.append($( '<h4>User Name:</h4>' ));
	let userNameInput = $('<input>');
	if (o) {
		userNameInput.val(o.userName);
	}
	userNameInput.attr('id','userName');
	formDiv.append($( userNameInput ));
	formDiv.append($( '<p>' ));

	formDiv.append($( '<h4>Email address:</h4>' ));
	let eMailInput = $('<input>');
	if (o) {
		eMailInput.val(o.eMail);
	}
	eMailInput.attr('id','eMail');
	formDiv.append($( eMailInput ));
	formDiv.append($( '<p>' ));

	formDiv.append($( '<h4>Your age:</h4>' ));
	let ageInput = $('<input>');
	if (o) {
		ageInput.val(o.age);
	}
	ageInput.attr('id','age');
	formDiv.append($( ageInput ));
	formDiv.append($( '<p>' ));

	return formDiv;
}
function addRecord () {
	$( '#myContent' ).append(addForm());
	let saveButton = $( '<button>Save</button>' );
	saveButton.click(saveClick);
	$( '#myContent' ).append($( saveButton ));
	let cancelButton = $( '<button>Cancel</button>' );
	cancelButton.click(cancelClick);
	$( '#myContent' ).append($( cancelButton ));
}
function updRecord() {
	let o;
	for (let i in allLocalData) {
		// console.log(this.value);
		if (allLocalData[i]['id']==this.value) {
			o = allLocalData[i];
			break;
		}
	}
	$( '#myContent' ).append(addForm(o));
	let postUpdButton = $( '<button>Post Update</button>' );
	postUpdButton.click(saveClick);
	$( '#myContent' ).append($( postUpdButton ));
	let cancelButton = $( '<button>Cancel</button>' );
	cancelButton.click(cancelClick);
	$( '#myContent' ).append($( cancelButton ));
}
function saveClick() {
	// let urlas = "http://192.168.1.81:8080/add";
	// currentKeys = Object.keys(allLocalData);
	let entry = {
		userName: $( '#userName' ).val(),
		eMail: $( '#eMail' ).val(),
		age: parseInt($( '#age' ).val())
	};
	if ($( '#idNr' ).length > 0) {
		entry.id = parseInt($( '#idNr' ).val());
		for (let i = 0; i < allLocalData.length; i++) {
			if (allLocalData[i]['id'] == $( '#idNr' ).val()) {
				allLocalData[i]= entry;
				break;
			}
		}
		// urlas = "http://192.168.1.81:8080/update";
	} else if(allLocalData.length == 0) {
    entry.id = 0;
		allLocalData.push(entry);
	} else {
		entry.id = allLocalData[allLocalData.length-1].id+1;
		allLocalData.push(entry);
	}
	localStorage.setItem( 'data', JSON.stringify(allLocalData));
	console.log(allLocalData);
	showList();
	// ajaxIskvietimas(entry, urlas);
}
function cancelClick() {
	$( '#myContent' ).empty();
	showList();
}
function delRecord() {
	// let entry = {
	// 	id: parseInt(this.value)
	// };
	// entry = JSON.stringify(entry);
	// let urlas = 'http://192.168.1.81:8080/delete';
	// ajaxIskvietimas(entry, urlas);
	// console.log(this.value);
	for (let i = 0; i < allLocalData.length; i++) {
		if (allLocalData[i]['id']==this.value) {
			allLocalData.splice(i, 1);
			break;
		}
	}
	localStorage.setItem( 'data', JSON.stringify(allLocalData));
	console.log(allLocalData);
	showList();
}
// function ajaxIskvietimas (entry, urlas) {
// 	$.ajax({
// 	type: 'POST',
// 	url: urlas,
// 	contentType: 'application/json',
// 	data: entry,
// 	dataType: 'json',
// 	success: function(data) {
// 		if (data.error) {
// 			alert(data.error);
// 		} else {
// 			showList();
// 		}
// 	},
// 	error: function (response) {
// 		alert('Error: '+response);
// 	}
// });
// }
function formList (allLocalData) {
	let table = $( '<table>' );
	for (let i = 0; i < allLocalData.length; i++) {
		let row = $( '<tr>' );
		let cell = $( '<td>' );
		cell.text(allLocalData[i].id);
		row.append(cell);
		cell = $( '<td>' );
		cell.text(allLocalData[i].userName);
		row.append(cell);
		cell = $( '<td>' );
		cell.text(allLocalData[i].eMail);
		row.append(cell);
		cell = $( '<td>' );
		cell.text(allLocalData[i].age);
		row.append(cell);
		cell = $( '<td>' );
		let updButton = $( '<button>Update</button>' );
		cell.append(updButton);
		row.append(cell);
		updButton.attr('value',allLocalData[i].id);
		updButton.click(updRecord);
		cell = $( '<td>' );
		let delButton = $( '<button>Delete</button>' );
		cell.append(delButton);
		row.append(cell);
		delButton.attr('value',allLocalData[i].id);
		delButton.click(delRecord);
		// table suzino apie pirma eilute:
		table.append(row);
		// pirmoj iteracijos pabaigoje mirsta kintamieji row bei cell, bet ne table - jis uz ciklo ribu, su nuorodom i appendinus objektus
		$( '#myContent' ).append(table);
	}
}
