const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


let x = canvas.width / 2;
let y = canvas.height / 2;
const radius = 30;
let dx = 6;
let dy = 6;

function GameObject() {
ctx.fillStyle = "purple";     
ctx.fillRect(20, 300, 20, 150);
}

function drawCircle() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

GameObject();

x += dx;
y += dy;


requestAnimationFrame(draw);
}

drawCircle();