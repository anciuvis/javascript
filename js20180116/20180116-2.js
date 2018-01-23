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

	// USERNAME VALIDATION
	if (user.length<5||user.length>12) {
		alert('username length not right');
	}
	let found = false;
	for (let i = 0; i < user.length; i++) {
		console.log(user[i]);
		if (user[i]>='0'&&user[i]<='9') {
			found = true;
			break;
		}
	}
	if (!found) {
		console.log('klaida');
		alert('username must contain number');
		return;
	}

	// PASSWORD VALIDATION
	if (pass.length<7||pass.length>12) {
		alert('password length not right');
	}
	found = false;
	for (let i = 0; i < pass.length; i++) {
		console.log(pass[i]);
		if (pass[i]>='0'&&pass[i]<='9') {
			found = true;
			break;
		}
	}
	if (!found) {
		console.log('klaida');
		alert('password must contain number');
		return;
	}
	found = false;
	for (let i = 0; i < pass.length; i++) {
		console.log(pass[i]);
		const spc = ["!", ".", ",", ";", "?", "[", "]", "{", "}", "/", "\\", "*", "(", ")", "-", "+", "_", "#", "@", "&", "$", "|", "'", "\"", ">", "<", "^", "`", "~", "="]
		// kad neaprasineti ilgos salygos kaip apacioj, padarom masyva is spec.simboliu
		// if (pass[i] === "!"||pass[i] === "."||pass[i] === ","||pass[i] === ";"||pass[i] === "?"||pass[i] === "["||pass[i] === "]"||pass[i] === "{"||pass[i] === "}"||pass[i] === "/"||pass[i] === "\\"||pass[i] === "*") {
		if (spc.indexOf(pass[i])>=0) {
			found = true;
			break;
		}
	}
	if (!found) {
		console.log('klaida');
		alert('password must contain special symbol');
		return;
	}
}

//RegExp
let r1 = new RegExp ('\d+'); // tas pats kaip r2, retai taip uzrasoma
let r2 = /\d+/;

let r3 = new RegExp ('[a-q]*','i'); // tas pats kaip r4
let r4 = /[a-q]*/i;

let s = 'ABC3DGc';
r2 = /\d/; // situo atveju galima rasyti ir \d+ ir \d tiesiog
if (r2.test(s)) {
	console.log('skaicius yra');
} else {
	console.log('skaiciaus nera');
}

r2 = /^[aA].*[cC]$/; // kad prasideda a arba A ir baigiasi c arba C, tarp ju nesvarbu skaicius, .* reiskia kad salyga gali kartotis arba nuli arba n kartu (t.y. neprivaloma kad kartotusi isvis)
// r2 = /^[a].*[c]$/i; - tas pats, i pasako kad tinka mazosios ir didziosios
if (r2.test(s)) {
	console.log('salyga yra');
} else {
	console.log('salygos nera');
}

s = 'apple is red and tasty';
console.log(s);
r2 = /(red)|(yellow)/; // surasti kad yra 'red' arba 'yellow'
if (r2.test(s)) {
	console.log('red/yellow yra');
} else {
	console.log('red/yellow nera');
}

// 	if (user == ""||pass == ""||name == ""||country == ""||email == ""||sex == "") {
// 		alert(notAllow);
// 		return false;
// 	}
// 	console.log('gerai');
// }
