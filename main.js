/* MAIN GAME JS */

var canvas = document.getElementById("main");
var bg = document.getElementById("bg");

width = 1000; // or window.innerWidth
height = 750; //window.innerHeight

canvas.width = width;
canvas.height = height;
bg.width  = width;
bg.height = height;

var ctx = canvas.getContext("2d");

game = {
  state: 'play',
  scene: 'menu'
}

function draw(){
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#b5e9ff";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "red"
  ctx.fillRect(100, 100, 100, 100)

}

setInterval(draw, 1000/30);
