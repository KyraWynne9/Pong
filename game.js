var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

x = canvas.width / 2;
y = canvas.height / 2;
dx = 6;
dy = 6;

var player = new GameObject();
var ball = new GameObject(canvas.width/2,canvas.height/2);
ball.vx = -6;
ball.vy = 0;


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

    // ball code

    if(ball.x + ball.width/2 > canvas.width){
        ball.vx = -ball.vx;
    }
    if(ball.y + ball.width/2 > canvas.height){
        ball.vy = -ball.vy;
    }
    if(ball.y - ball.width < -1.5){
        ball.vy = -ball.vy;
    }
    if(player.hitTestObject(ball)){
        ball.vx = ball.vx * -1;
        console.log("hit")
    }

    ball.x += ball.vx;
    ball.y += ball.vy;
    ball.drawCircle();



}