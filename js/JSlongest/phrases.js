// use strict   // Mode strict du JavaScript

var phrases =[
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  "Aenean commodo ligula eget dolor. Aenean massa.",
  "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
  "Nulla consequat massa quis enim.",
  "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
  "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
  "Nullam dictum felis eu pede mollis pretium.",
  "Integer tincidunt. Cras dapibus.",
  "Vivamus elementum semper nisi.",
  "Aenean vulputate eleifend tellus.",
  "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
  "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
  "Phasellus viverra nulla ut metus varius laoreet.",
  "Quisque rutrum. Aenean imperdiet.",
  "Etiam ultricies nisi vel augue.",
  "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  "Aenean commodo ligula eget dolor. Aenean massa.",
  "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.",
  "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
  "Nulla consequat massa quis enim.",
  "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
  "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
  "Nullam dictum felis eu pede mollis pretium.",
  "Integer tincidunt. Cras dapibus.",
  "Vivamus elementum semper nisi.",
  "Aenean vulputate eleifend tellus.",
  "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
  "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
  "Phasellus viverra nulla ut metus varius laoreet.",
  "Quisque rutrum. Aenean imperdiet.",
  "Etiam ultricies nisi vel augue.",
  "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
  "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit ipsuminus max.",
  "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.",
  "Maecenas nec odio et ante tincidunt tempus.",
  "Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.",
  "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.",
  "Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.",
  "Sed consequat, leo eget bibendum sodales, augue velit cursus nunc."
];
////
// for (var i = 0; i < phrases.length; i++) {
//   var x = phrases[i];
//   console.log('----');
//   console.log(i);
//   console.log(x); // cia patikrinu koks stringas imamas
//   console.log(x.length); // isduoda stringo ilgi
//   if (x.length>phrases[i+1].length) {
//     console.log('true');
//   } else {
//     x=phrases[i+1];
//   }
//   console.log(i);
// }
// bandymai
var x;
var l='';
function longest () {
  for (var i = 0; i < phrases.length; i++) {
    if (phrases[i].length > l) {
      l = phrases[i].length;
      x = phrases[i];
    }
  }
  return x;
}
longest (phrases);
console.log(x);
////
// var x;
// var l='';
// function shortest () {
//   for (var i = 0; i < phrases.length; i++) {
//     if (phrases[i].length < l) {
//       l = phrases[i].length;
//       x = phrases[i];
//     }
//   }
//   return x;
// }
// shortest (phrases);
// console.log(x);
////
// phrases.sort (function(a,b) {
//   return b.length-a.length;
// })
// console.log(phrases[0]);
// console.log(phrases[phrases.length-1]);
// console.log(phrases);
////
for (let i = 0; i < phrases.length-1; i++) {
  for (let j = i+1; j < phrases.length; j++) {
    if (phrases[i].length > phrases[j].length) {
      let tmp=phrases[i];
      phrases[i]=phrases[j];
      phrases[j]=tmp;
    }
  }
}
console.log(phrases);
