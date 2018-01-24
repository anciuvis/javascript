'use strict';   // JavaScript strict mode

/*******************************************************************************************/
/* ******************************** UTILITIES METHODS **********************************/
/*******************************************************************************************/

function getRandomInteger(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function installEventHandler(selector, type, eventHandler)
{
    var domObject;

    // Gets the first DOM object corresponding to the selector.
    domObject = document.querySelector(selector);

    // Installs an event handler on this DOM object.
    domObject.addEventListener(type, eventHandler);
}