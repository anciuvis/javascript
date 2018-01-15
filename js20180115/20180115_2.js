// function start() {
// 	let t = document.createElement('table');
// 	dLentele.appendChild(t);
// 	for (let i=0; i<=10; i++) {
// 		let tr = document.createElement('tr');
// 		t.appendChild(tr);
// 		for (let j=0; j<=10; j++) {
// 			let td = document.createElement('td');
// 			if (i==0) {
// 				let th = document.createElement('th');
// 				tr.appendChild(th);
// 				th.appendChild(document.createTextNode(j));
// 			} else if (j==0) {
// 				let th = document.createElement('th');
// 				tr.appendChild(th);
// 				th.appendChild(document.createTextNode(i));
// 			} else {
// 			td.appendChild(document.createTextNode(i*j));
// 			tr.appendChild(td);
// 			td.onmouseover = function() {
// 				var notice = document.getElementById("notice");
// 				notice.innerHTML = i+'x'+j;
// 			};
// 			td.onmouseout = function() {
// 				var notice = document.getElementById("notice");
// 				notice.innerHTML = '';
// 			};
// 			}
// 		}
// 	}
// 	console.log(document.body);
// }
// // destytojo variantas
function start() {
	let t = document.createElement('table');
	let h = document.createElement('tr'); // tuscia sukurem pirma
	h.appendChild(document.createElement('th'));
	for (let i = 1; i <= 10; i++) {
		let th = document.createElement('th');
		th.appendChild(document.createTextNode(i));
		h.appendChild(th);
	}
	t.appendChild(h);
	for (let i = 1; i <= 10; i++) {
		let r = document.createElement('tr');
		let d = document.createElement('th'); // sukuriam pirma lenteles 'stulpeli' su i reiksme
		d.appendChild(document.createTextNode(i));
		r.appendChild(d);
		for (let j = 1; j <= 10; j++) {
			d = document.createElement('td');
			d.daugyba = i+'x'+j;
			d.addEventListener('mouseover', detailsOn);
			d.addEventListener('mouseleave', detailsOff);
			d.appendChild(document.createTextNode(i*j));
			r.appendChild(d);
		}
		t.appendChild(r);
	}
	document.getElementById('dLentele').appendChild(t);
	console.log(document.body);
}
function detailsOn() {
	document.getElementById('notice').appendChild(document.createTextNode(this.daugyba));
}
function detailsOff() {
	let d = document.getElementById('notice');
	d.innerHTML="";
}
