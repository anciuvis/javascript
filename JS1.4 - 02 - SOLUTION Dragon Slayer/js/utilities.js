'use strict';   // JavaScript strict mode

/*******************************************************************************************/
/******************************** UTILITY METHODS *********************************/
/*******************************************************************************************/

function getRandomInteger(min, max)
{
    // Returns a random integer included between min and max arguments included
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function requestInteger(message, min, max)
{
    var integer;

    /*
     * The loops runs until the integer is a number (fonction isNaN())
     * included between arguments min and max
     */
    do
    {
        // We ask the user for an integer
        integer = parseInt(window.prompt(message));
    }
    while(isNaN(integer) == true || integer < min || integer > max);

    return integer;
}

function showImage(source)
{
    document.write('<img src="' + source + '">');
}