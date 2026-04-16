var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

x = canvas.width / 2;
y = canvas.height / 2;
dx = 6;
dy = 6;

var player = new GameObject();
var player2 = new GameObject(1020);
var ball = new GameObject(canvas.width/2,canvas.height/2);
ball.vx = -6;
ball.vy = 0;

let winner

let score1 = 0

function raiseScore() {
    score1 += 1;
    let scoreElement = document.getElementById("scoreDisplay1");
    scoreElement.innerHTML = "Player 1: " + score1;
    if (score1 == 10) {
        state = "win"
        winner = player1
    }
}

let score2 = 0

function raiseScore2() {
    score2 += 1;
    let scoreElement = document.getElementById("scoreDisplay2");
    scoreElement.innerHTML = "Player 2: " + score2;
        if (score2 == 10) {
        state = "win"
        winner = player2
    }
}


// function Ball() {

//  dy = 0;
//  ball.x -= dx;
//  ball.y += dy;

//  ball.move();
//  ball.drawCircle();

// }




var timer = setInterval(animate, 1000 / 60);

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // GameObject();

    // player code

     x += dx;
     y += dy;

    
   if (s && player.y + player.height/2 < canvas.height) {
        player.y += 5;
    }
     if (w && player.y - player.height/2 > 0) {
         player.y -= 5;
     }

     player.move();
     player.drawRect();


     if (ArrowDown && player2.y + player2.height/2 < canvas.height) {
        player2.y += 5;
    }
     if (ArrowUp && player2.y - player2.height/2 > 0) {
         player2.y -= 5;
     }
     player2.move();
     player2.drawRect();
    // ball code

    if(ball.x + ball.width/2 > canvas.width){
        ball.x = canvas.width/2
        ball.y = canvas.height/2
        ball.vx = 6;
        ball.vy = 0;
        raiseScore();
    }
    if(ball.y + ball.width/2 > canvas.height){
        ball.vy = -ball.vy;
    }
    if(ball.y - ball.width < -1.5){
        ball.vy = -ball.vy;
    }
    if(ball.x - ball.width/2 < 0){
        ball.x = canvas.width/2
        ball.y = canvas.height/2
        ball.vx = -6;
        ball.vy = 0;
        raiseScore2();
    }
    //if(player.hitTestObject(ball)){
    //    ball.vx = ball.vx * -1;
    //    console.log("hit")
    //}


    if(player.hitTestObject(ball)){

    if(ball.y < player.y - player.height/6)
     {
        ball.vx = 6;
       ball.vy = -6;
     } 

    else if(ball.y > player.y + player.height/6)
     {
       ball.vx = 6;
       ball.vy = 6;
     }

    else 
     {
       ball.vx = - ball.vx;
       // ball.vy = - ball.vy;
     }
    }

    if(player2.hitTestObject(ball)){

    if(ball.y < player2.y - player2.height/6)
     {
        ball.vx = -6;
       ball.vy = -6;
     } 

    else if(ball.y > player2.y + player2.height/6)
     {
       ball.vx = -6;
       ball.vy = 6;
     }

    else 
     {
       ball.vx = - ball.vx;
       // ball.vy = - ball.vy;
     }
    }

    ball.x += ball.vx;
    ball.y += ball.vy;
    ball.drawCircle();



}