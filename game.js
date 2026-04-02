var canvas;
var context;
var timer;
var interval = 1000/60;
var player1 = new GameObject();

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

player1.drawRect();