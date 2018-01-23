var notAllow = "Required fields must NOT be empty";

function validateForm() {
	console.log('Validate nuspaustas');
	var user = document.forms["myForm"]["user"].value;
	console.log(user);
	var pass = document.forms["myForm"]["pass"].value;
	console.log(pass);
	// var names = document.forms["myForm"]["names"].value;
	// console.log(name);
	// var address = document.forms["myForm"]["address"].value;
	// console.log(address);
	// var country = document.forms["myForm"]["country"].value;
	// console.log(country);
	// var zip = document.forms["myForm"]["zip"].value;
	// console.log(zip);
	// var email = document.forms["myForm"]["email"].value;
	// console.log(email);
	// var sex = document.forms["myForm"]["sex"].value;
	// console.log(sex);
	// var langEn = document.forms["myForm"]["langEn"].value;
	// console.log(langEn);
	// var langOth = document.forms["myForm"]["langOth"].value;
	// console.log(langOth);
	// var about = document.forms["myForm"]["about"].value;
	// console.log(about);

	// 	if (user == ""||pass == ""||name == ""||country == ""||email == ""||sex == "") {
	// 		alert(notAllow);
	// 		return false;
	// 	}
	// 	console.log('gerai');
	// }

	// USERNAME VALIDATION
	if (user.length<5||user.length>12) {
		alert('username length not right');
		console.log('username ilgis blogas');
		return;
	}
	console.log('username ilgis geras');

	let rLett = /[A-Za-z]/;
	let rDig = /\d/;
	let rSpec = /[!.,;?[\]{}/\\*(-)-+_#@&$|'\"><^`~=]/;

	if (rLett.test(user)) {
		console.log('raides username yra');
	} else {
		alert('username must contain letters');
		console.log('raidziu username nera');
		return;
	}

	if (rDig.test(user)) {
		console.log('skaicius username yra');
	} else {
		alert('username must contain number');
		console.log('skaiciaus username nera');
		return;
	}

	if (rSpec.test(user)) {
		alert('username cannot contain special symbols');
		console.log('username yra special symbols');
		return;
	} else {
		console.log('username nera spec.simboliu');
	}
	// senas variantas tikrinimui ar yra skaicius (be Reg Expo)
	// let found = false;
	// for (let i = 0; i < user.length; i++) {
	// 	console.log(user[i]);
	// 	if (user[i]>='0'&&user[i]<='9') {
	// 		found = true;
	// 		break;
	// 	}
	// }
	// if (!found) {
	// 	console.log('klaida');
	// 	alert('username must contain number');
	// 	return;
	// }
	// let r = /\d/; // situo atveju galima rasyti ir \d+ ir \d tiesiog
	// 	if (r.test(user)) {
	// 		console.log('skaicius yra');
	// 	} else {
	// 		console.log('skaiciaus nera');
	// 		alert('username must contain number');
	// 		return;
	// 	}
	// }


	// PASSWORD VALIDATION
	if (pass.length<7||pass.length>12) {
		alert('password length not right');
		console.log('passo ilgis blogas');
		return;
	}
	console.log('passo ilgis geras');

	if (rLett.test(pass)) {
		console.log('raides passworde yra');
	} else {
		alert('password must contain letters');
		console.log('raidziu passworde nera');
		return;
	}

	if (rDig.test(pass)) {
		console.log('skaicius passworde yra');
	} else {
		alert('password must contain number');
		console.log('skaiciaus passworde nera');
		return;
	}

	if (rSpec.test(pass)) {
		console.log('spec.simbolis passworde yra');
	} else {
		alert('password must contain special symbol');
		console.log('spec.simboliaus passworde nera');
		return;
	}

}
		// if (pass[i] === "!"||pass[i] === "."||pass[i] === ","||pass[i] === ";"||pass[i] === "?"||pass[i] === "["||pass[i] === "]"||pass[i] === "{"||pass[i] === "}"||pass[i] === "/"||pass[i] === "\\"||pass[i] === "*") {
		// kad neaprasineti ilgos salygos kaip apacioj, padarom masyva is spec.simboliu
// 		const spc = ["!", ".", ",", ";", "?", "[", "]", "{", "}", "/", "\\", "*", "(", ")", "-", "+", "_", "#", "@", "&", "$", "|", "'", "\"", ">", "<", "^", "`", "~", "="]
// 		if (spc.indexOf(pass[i])>=0) {
// 			found = true;
// 			break;
// 		}
// 	}
// 	if (!found) {
// 		console.log('klaida');
// 		alert('password must contain special symbol');
// 		return;
// 	}
// }

// // RegExp bandymai
// let r1 = new RegExp ('\d+'); // tas pats kaip r2, retai taip uzrasoma
// let r2 = /\d+/;
//
// let r3 = new RegExp ('[a-q]*','i'); // tas pats kaip r4
// let r4 = /[a-q]*/i;
//
// let s = 'ABC3DGc';
// r2 = /\d/; // situo atveju galima rasyti ir \d+ ir \d tiesiog
// if (r2.test(s)) {
// 	console.log('skaicius yra');
// } else {
// 	console.log('skaiciaus nera');
// }
//
// r2 = /^[aA].*[cC]$/; // kad prasideda a arba A ir baigiasi c arba C, tarp ju nesvarbu skaicius, .* reiskia kad salyga gali kartotis arba nuli arba n kartu (t.y. neprivaloma kad kartotusi isvis)
// // r2 = /^[a].*[c]$/i; - tas pats, i pasako kad tinka mazosios ir didziosios
// if (r2.test(s)) {
// 	console.log('salyga yra');
// } else {
// 	console.log('salygos nera');
// }
//
// s = 'apple is rĄed and tastąy';
// console.log(s);
// r2 = /(red)|(yellow)/; // surasti kad yra 'red' arba 'yellow'
// r3 = /\u0104/;
// if (r2.test(s)) {
// 	console.log('red/yellow yra');
// } else {
// 	console.log('red/yellow nera');
// }
//
// r3 = /\u0104/;
// if (r3.test(s)) {
// 	console.log('Ą yra');
// } else {
// 	console.log('Ą nera');
// }
// if (s.search(r2)>=0) { // s.search (r2) grazina match'o eilini numeri jeigu ji rado. arba -1 jeigu nerado
// 	console.log('Ą yra');
// } else {
// 	console.log('Ą nera');
// }
//
// // s.match(r2);
// // r2.exec(s); // grazina masyva
//
// s = 'apple is red and tasty';
// r2 = /(red).*(ta)/i; // surasti
// if (s.search(r2)>=0) {
// 	console.log(s.match(r2));
// 	console.log('red ir/ar ta yra');
// } else {
// 	console.log('red ir/ar ta nera');
// }
// s = s.replace(r2,"$2$1");
// console.log(s);
//
// //apkeicia vietomis du zodzius
// s = 'red tasty';
// r2 = /(\w*) (\w*)/i;
// if (s.search(r2)>=0) {
// 	console.log(s.match(r2));
// 	console.log('yra');
// } else {
// 	console.log('nera');
// }
// s = s.replace(r2,"$2 $1");
// console.log(s);
