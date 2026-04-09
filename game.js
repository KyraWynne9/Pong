var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

x = canvas.width / 2;
y = canvas.height / 2;
dx = 6;
dy = 6;

var player = new Paddle();

function GameObject() {

x += dx;
y += dy;

if(s) {
player.y += 5;
}
if(w) {
player.y -= 5;
}

player.move();
player.drawRect();
}

var timer = setInterval(animate, 1000/60);

function animate() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
GameObject();


if (x + player > canvas.width || x - player < 0 ) {
    dx = -dx;
}
if (y + player > canvas.height || y - player < 0 ) {
    dy = -dy;
}
}

