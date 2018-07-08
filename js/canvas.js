
//Constants//
const CANVAS_BORDER_COLOUR = 'black';
const CANVAS_BACKGROUND_COLOUR = 'white';
const SNAKE_BORDER_COLOUR = 'darkgreen';
const SNAKE_COLOUR = 'lightgreen';


//for snake to work, we need to know the location of it
//to do this, we can represent the snake as an array of coordinates
//to create a snake in the middle of the canvas 150,150 

let snake = [
    { x: 150, y: 150 },
    { x: 140, y: 150 },
    { x: 130, y: 150 },
    { x: 120, y: 150 },
    { x: 110, y: 150 },
];

// First we get the canvas element using the id gameCanvas we specified earlier. 
var gameCanvas = document.getElementById('gameCanvas');

//We then get the canvas “2d” context, which means we will be drawing into 2D space.
var ctx = gameCanvas.getContext('2d');

//select the color to fill the canvas
ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;

//select the colour for the border of the canvas
ctx.strokestyle = CANVAS_BORDER_COLOUR;

// Draw a "filled" rectangle to cover the entire canvas
ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

// Draw a border around the entire canvas
ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);

drawSnake();
