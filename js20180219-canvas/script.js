// // function draw() {
//   var canvas = document.getElementById('mycanvas');
//   if (canvas.getContext) {
//     var ctx = canvas.getContext('2d');
// 		var circle = new Path2D();
//     // circle.moveTo(150, 150);
//     circle.arc(100, 145, 5, 0, 2 * Math.PI);
// 		ctx.fillStyle = "#D19761";
// 		ctx.fill(circle);
// 	}
// // }

var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var centerX = canvas.width/2;
var centerY = canvas.height/2;
var start = null;
var rotateCount = 62;
var steps = 1000;
var incr = Math.PI/steps;
var speed = 5000;

function update(timeStamp) {
  if (!start) {
    start = timeStamp;
  }
	let curIncr = incr;
  let progress = Math.min((timeStamp-start)/speed, 1);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.moveTo(centerX,centerY);

  while (curIncr < progress*rotateCount*Math.PI) {
		let width = curIncr/8;
    let newX = centerX + curIncr*Math.cos(curIncr)* width;
    let newY = centerY + curIncr*Math.sin(curIncr)* width;
		ctx.fillStyle = 'rgb('+Math.floor(255 - 3*curIncr)+', '+Math.floor(0 + 2*curIncr)+', '+Math.floor(255 - 0.5*curIncr)+')';
		ctx.strokeStyle = 'rgb('+Math.floor(0 + 3*curIncr)+', '+Math.floor(255 - 2*curIncr)+', '+Math.floor(0 + 0.5*curIncr)+')';
		ctx.lineWidth=0.8*curIncr;
    ctx.lineTo(newX,newY);
		curIncr += incr;
  }
	ctx.fill();
	ctx.stroke();
  if (progress < 1) {
    requestAnimationFrame(update);
  }
}
requestAnimationFrame(update);
// galimas uzrasymo variantas:
// var a = 15;
// var b = 5;
// var s = "As turiu "+a+" obuolius";
// var sp = `As turiu ${a+b} obuolius`; // susumuos
