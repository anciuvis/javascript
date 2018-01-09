'use strict';   // JavaScript strict mode

/***********************************************************************************/
/*********************************** GAME DATA ******************************/
/**********************************************************************************/

// The only global variable containing the state of the game
var game;


// Statement of the game constants, making the code easier to read
const ARMOR_COPPER  = 1;
const ARMOR_IRON    = 2;
const ARMOR_MAGICAL = 3;

const LEVEL_EASY   = 1;
const LEVEL_NORMAL = 2;
const LEVEL_HARD   = 3;

const SWORD_WOOD      = 1;
const SWORD_STEEL     = 2;
const SWORD_EXCALIBUR = 3;



/**********************************************************************************/
/********************************** GAME METHODS ************************/
/**********************************************************************************/

function computeDragonDamagePoint()
{
    var damagePoint;

    if(game.difficulty == LEVEL_EASY)
    {
        // The dragon deals less damages if the level is easier
        damagePoint = getRandomInteger(10, 20);
    }
    else
    {
        damagePoint = getRandomInteger(30, 40);
    }

    // Calculation of a final result depending on the player's armor.
    return Math.round(damagePoint / game.armorRatio);
}

function computePlayerDamagePoint()
{
    var damagePoint;

    // The damages dealt by the player depends on the game difficulty.
    switch(game.difficulty)
    {
        case LEVEL_EASY:
        damagePoint = getRandomInteger(25, 30);
        break;

        case LEVEL_NORMAL:
        damagePoint = getRandomInteger(15, 20);
        break;

        case LEVEL_HARD:
        damagePoint = getRandomInteger(5, 10);
        break;
    }

    // Calculation of the final result dependending on the players's sword.
    return Math.round(damagePoint * game.swordRatio);
}

function gameLoop()
{
    var damagePoint;
    var dragonSpeed;
    var playerSpeed;

    // The game loops as long as the dragon and player are alive.
    while(game.hpDragon > 0 && game.hpPlayer > 0)
    {
        console.log('Round number ' + game.round);

        // Gives a speed to the dragon and player.
        dragonSpeed = getRandomInteger(10, 20);
        playerSpeed = getRandomInteger(10, 20);

        // Is the dragon faster than the player?
        if(dragonSpeed > playerSpeed)
        {
            // Yes, the player takes damages and loses health points
            damagePoint = computeDragonDamagePoint();

            // Player's HP decrease
            game.hpPlayer -= damagePoint;
            // Similar to game.hpPlayer = game.hpPlayer - damagePoint;

            console.log
            (
                'The dragon is faster and burns you, you lose ' +
                damagePoint + ' HP'
            );
        }
        else
        {
            // No, the dragon takes damage and loses health points
            damagePoint = computePlayerDamagePoint();

            // Dragon's HP deacreases
            game.hpDragon -= damagePoint;
            // Similar to game.hpDragon = game.hpDragon - damagePoint;

            console.log
            (
                'You are faster than the dragon, you hit him and he loses  ' +
                damagePoint + ' HP'
            );
        }

        showGameState();

        // Next round.
        game.round++;
    }
}

function initializeGame()
{
    // Initialization of the game's global variable.
    game       = new Object();
    game.round = 1;

    game.difficulty = requestInteger
    (
        'Difficulty ?\n' +
        '1. Easy - 2. Normal - 3. Hard',
        1, 3
    );

    /*
     * Gives starting health points to the player and dragon depending on the 
     * difficulty level.
     */
    switch(game.difficulty)
    {
        case LEVEL_EASY:
        game.hpDragon = getRandomInteger(150, 200);
        game.hpPlayer = getRandomInteger(200, 250);
        break;

        case LEVEL_NORMAL:
        game.hpDragon = getRandomInteger(200, 250);
        game.hpPlayer = getRandomInteger(200, 250);
        break;

        case LEVEL_HARD:
        game.hpDragon = getRandomInteger(200, 250);
        game.hpPlayer = getRandomInteger(150, 200);
        break;
    }


    game.armor = requestInteger
    (
        'Armor ?\n' +
        '1. Copper - 2. Iron - 3. Magical',
        1, 3
    );

    game.sword = requestInteger
    (
        'Sword ?\n' +
        '1. Wood - 2. Steel - 3. Excalibur',
        1, 3
    );


    switch(game.armor)
    {
        // A copper armor protects normally
        case ARMOR_COPPER:
        game.armorRatio = 1;
        break;

        // An iron armor slightly diminishes the taken damages.
        case ARMOR_IRON:
        game.armorRatio = 1.25;
        break;

        // A magical armor divides by two the taken damages.
        case ARMOR_MAGICAL:
        game.armorRatio = 2;
        break;
    }

    switch(game.sword)
    {
        // A wooden sword deals only half the damage.
        case SWORD_WOOD:
        game.swordRatio = 0.5;
        break;

        // A steel sword deals normal damages.
        case SWORD_STEEL:
        game.swordRatio = 1;
        break;

        // Legendary sword deals twice the damage.
        case SWORD_EXCALIBUR:
        game.swordRatio = 2;
        break;
    }
}

function showGameState()
{
    console.log
    (
        'Dragon : ' + game.hpDragon + ' HP, ' +
        'player : ' + game.hpPlayer + ' HP'
    );
}

function showGameWinner()
{
    if(game.hpDragon <= 0)
    {
        showImage('images/knight.jpg');

        console.log("You win !");
        console.log("You had " + game.hpPlayer + " HP left");
    }
    else // if(game.hpPlayer <= 0)
    {
        showImage('images/dragon.jpg');

        console.log("The dragon wins !");
        console.log("The dragon had " + game.hpDragon + " HP left");
    }
}

function startGame()
{
    // Game initialization.
    console.clear();
    initializeGame();

    // Game execute.
    console.log('Starting health points :');
    showGameState();
    gameLoop();

    // Game ending.
    showGameWinner();
}



/************************************************************************************/
/********************************** MAIN CODE **********************************/
/************************************************************************************/

startGame();