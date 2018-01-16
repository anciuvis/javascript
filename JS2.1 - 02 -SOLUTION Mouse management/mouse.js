'use strict';   // JavaScript strict mode
*************************** DATA *************************************/
var button;
var rectangle;
/* ********************************** METHODS ********************************/
function onClickButton() {
	// The .toggle() method will add or remove a class(like a switch).
	rectangle.classList.toggle('hide');
}

function onMouseOverRectangle() {
	// The .add() method will add the class.
	rectangle.classList.add('important');
}

function onDoubleClickRectangle() {
	// The .toggle() method will add or remove a class(like a switch).
	rectangle.classList.toggle('good');
}

function onMouseOutRectangle() {
	// The.remove() methode will erase the class.
	rectangle.classList.remove('good');
	rectangle.classList.remove('important');
}
/* ******************************** MAIN CODE **********************************/
// Looks for the button and the rectangle in the DOM tree.
button    = document.getElementById('toggle-rectangle');
rectangle = document.querySelector('.rectangle');
// Install a click event handler on the button
button.addEventListener('click', onClickButton);
// Install event handler for mouse over
rectangle.addEventListener('mouseout', onMouseOutRectangle);
rectangle.addEventListener('mouseover', onMouseOverRectangle);
// Install a event handler for double clicking on the rectangle
rectangle.addEventListener('dblclick', onDoubleClickRectangle);
