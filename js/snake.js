//CREATING AND DRAWING THE SNAKE  
// to display the snake on the canvas, we can write a function to draw a rectangle for each pair of coordinates

function drawSnake() {
    //loop through the snake parts drawing each part on canvas
    snake.forEach(drawSnakePart)
}

//Draws a part of the snake on canvas
//@param object snakePart - coordinates where tha part should be drawn
function drawSnakePart(snakePart) {

    //set the color of the snake 
    ctx.fillStyle = SNAKE_COLOUR;

    //set the border colour of the snake 
    ctx.strokeStyle = SNAKE_BORDER_COLOUR;

    //Draw  filled rectangle to represent the snake a the coordinates
    // the part is located
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);

    //Draw a border around the snake
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}
