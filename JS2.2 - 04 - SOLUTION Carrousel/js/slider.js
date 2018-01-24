'use strict';   // JavaScript strict mode

/***********************************************************************************/
/* *********************************CAROUSEL DATA *****************************/
/***********************************************************************************/

// Keyboard keys codes.
const KEY_SPACE = 32;
const KEY_LEFT = 37;
const KEY_RIGHT = 39;


// Carousel slides list.
var slides =
[
    { image: 'images/1.jpg', legend: 'Street Art'          },
    { image: 'images/2.jpg', legend: 'Fast Lane'           },
    { image: 'images/3.jpg', legend: 'Colorful Building'   },
    { image: 'images/4.jpg', legend: 'Skyscrapers'         },
    { image: 'images/5.jpg', legend: 'City by night'       },
    { image: 'images/6.jpg', legend: 'Tour Eiffel la nuit' }
];

// Carousel state
var state;



/***********************************************************************************/
/*************************** CAROUSEL  METHODS****************************/
/***********************************************************************************/

function onSliderGoToNext()
{
    // Next slide.
    state.index++;

    //  Did we reach the last slide?
    if(state.index == slides.length)
    {
        // Yes, we go back to the beggining (the carousel loops).
        state.index = 0;
    }

    // Display update.
    refreshSlider();
}

function onSliderGoToPrevious()
{
    // Previous slide.
    state.index--;

    // Did we reach the first slide?
    if(state.index < 0)
    {
        // Yes, we go back to the end (the carousel loops).
        state.index = slides.length - 1;
    }

    // Display update.
    refreshSlider();
}

function onSliderGoToRandom()
{
    var index;

    do
    {
        /*
         * Get a random slide index 
         * other than the current one.
         */
        index = getRandomInteger(0, slides.length - 1);
    }
    while(index == state.index);

    // Next random slide.
    state.index = index;

    // Display update.
    refreshSlider();
}

/*
 * When we create an event handle, the browser calls
 * the method by giving an event argument standing for the event itself.
 *
 * If the handler doesn't need this argument,
 * no need to state it!
 *
 * But here we will need it...
 */
function onSliderKeyUp(event)
{
    /*
     * The key press event handlers (keydown, keyup, keypress)
     * contains a keyCode property
     * corresponding to the keyboard key code.
     *
     * Il existe de très nombreux codes, plus ou moins standards, voir la page :
     * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
     */

    switch(event.keyCode)
    {
        case KEY_RIGHT:
        // Next slide.
        onSliderGoToNext();
        break;

        case KEY_SPACE:
        // Start or stop.
        onSliderToggle();
        break;

        case KEY_LEFT:
        // Previous slide.
        onSliderGoToPrevious();
        break;
    }
}

function onSliderToggle()
{
    var icon;

    // Toggles the icon between start and stop.
    icon = document.querySelector('#slider-toggle i');

    icon.classList.toggle('fa-play');
    icon.classList.toggle('fa-pause');

    // Is the carousel on?
    if(state.timer == null)
    {
        // No, we start it, it'll move every two seconds.
        state.timer = window.setInterval(onSliderGoToNext, 2000);

        /*
         * Switches the label to "OFF".
         *
         * The special variable 'this' is initialized by
         * the browser with the DOM object which triggered the event.
         *
         * The button "Start/Stop" triggered
         * the event, so the 'this' variable is worth the same as 
         * the object given by document.querySelector('#js-slider-toggle');
         */
        this.title = 'Stop the carrousel';
    }
    else
    {
        // Yes, stop the carousel.
        window.clearInterval(state.timer);

        // Reset the property for the next click.
        state.timer = null;

        /*
         * Switches the label to "ON".
         *
         * The special variable 'this' is initialized by
         * the browser with the DOM object which triggered the event.
         *
         * The button "Start/Stop" triggered
         * the event, so the 'this' variable is worth the same as 
         * the object given by document.querySelector('#js-slider-toggle');
         */
        this.title = 'Start the carrousel';
    }
}

function onToolbarToggle()
{
    var icon;

    // Toggles the link icon between hide and show the toolbar.
    icon = document.querySelector('#toolbar-toggle i');

    icon.classList.toggle('fa-arrow-down');
    icon.classList.toggle('fa-arrow-right');

    /*
     *  Could also be written as : 
     *
     *
     *  if(icon.classList.contains('fa-arrow-right') == true)
     *  {
     *      icon.classList.remove('fa-arrow-right');
     *      icon.classList.add('fa-arrow-down');
     *  }
     *  else
     *  {
     *      icon.classList.add('fa-arrow-right');
     *      icon.classList.remove('fa-arrow-down');
     *  }
     */

    // Hide or show the toolbar.
    document.querySelector('.toolbar ul').classList.toggle('hide');
}

function refreshSlider()
{
    var sliderImage;
    var sliderLegend;

    // Looks for carousel's content tags.
    sliderImage  = document.querySelector('#slider img');
    sliderLegend = document.querySelector('#slider figcaption');

    // Changes the pic's root and text.
    sliderImage.src          = slides[state.index].image;
    sliderLegend.textContent = slides[state.index].legend;
}



/***********************************************************************************/
/* ******************************** MAIN CODE *********************************/
/***********************************************************************************/

/*
 * Installs an event handler triggered by
 * the DOM tree construction end.
 *
 * The event handler is anonymous method
 * we give as a second argument to document.addEventListener(). 
 */
document.addEventListener('DOMContentLoaded', function()
{
    // Initialization of the carrousel.
    state       = new Object();
    state.index = 0;                   // Starts with the first slide.
    state.timer = null;                // The carrousel stopped at boot.


    // Event handlers installation.
    installEventHandler('#slider-random', 'click', onSliderGoToRandom);
    installEventHandler('#slider-previous', 'click', onSliderGoToPrevious);
    installEventHandler('#slider-next', 'click', onSliderGoToNext);
    installEventHandler('#slider-toggle', 'click', onSliderToggle);
    installEventHandler('#toolbar-toggle', 'click', onToolbarToggle);

    /*
     * The key pressing event must be set on the whole page,
     * not on a particular tag on the DOM tree.
     *
     * It corresponds to the <html> tag.
     */
    document.addEventListener('keyup', onSliderKeyUp);
    // Amounts to installEventHandler('html', 'keyup', onSliderKeyUp); 


    // Initial display.
    refreshSlider();
});