//to test how out advanceSnake func works, we can temporarily call it before the drawSnake func
//move on step to the right 
advanceSnake()
//change vertical velocity to 0 
dx = 0;
//change horizonal velocity to 10
dy = -10;
//move one step up
advanceSnake();
//draw snake on canveas
drawSnake();