const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

x = canvas.width / 2;
y = canvas.height / 2;
dx = 6;
dy = 6;

function GameObject() {
ctx.fillStyle = "purple";     
ctx.fillRect(20, 300, 20, 150);
}

function drawCircle() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

GameObject();
}

drawCircle();

var player1 = new GameObject();

