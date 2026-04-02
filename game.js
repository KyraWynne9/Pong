var canvas;
var context;
var timer;
var interval = 1000/60;
var player1 = new GameObject();

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


let x = canvas.width / 2;
let y = canvas.height / 2;
const radius = 30;
let dx = 6;
let dy = 6;

function Ball() {
ctx.beginPath();
ctx.arc(x, y, radius, 0, Math.PI * 2);
ctx.fillStyle = this.color;
ctx.fill();
ctx.closePath();
}

function getRandomColor() {

  var letter = "0123456789ABCDEF".split(""); 
  var color = "#";                           
  for(var i = 0; i < 6; i++){                
    color += letter[Math.round(Math.random()*15)]; 
  }
  return color;
}

function draw() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

Ball();

x += dx;
y += dy;

if (x + radius > canvas.width || x - radius < 0 ) {
    color = getRandomColor();
    dx = -dx;
} 
if (y + radius > canvas.height || y - radius < 0) {
    color = getRandomColor();
    dy = -dy;
} 


requestAnimationFrame(draw);
}

draw();