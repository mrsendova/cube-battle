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

player = {
  shape: 'rect',
  color: 'limegreen',
  w: 100,
  h: 100,
  x: 200,
  y: 550
}

ennemyOne = {
  shape: 'rect',
  color: 'red',
  w: 100,
  h: 100,
  x: 700,
  y: 550
}

hpBarPlayer = {
  shape: 'rect',
  color: 'red',
  w: 10,
  h: 500,
  x: 50,
  y: 190,
}

manaBarPlayer = {
  shape: 'rect',
  color: 'blue',
  w: 10,
  h: 300,
  x: 60,
  y: 390,
}

hpBarE = {
  shape: 'rect',
  color: 'red',
  w: 10,
  h: 500,
  x: 950,
  y: 190,
}

manaBarE = {
  shape: 'rect',
  color: 'blue',
  w: 10,
  h: 300,
  x: 940,
  y: 390,
}

objects = [player, ennemyOne, hpBarPlayer, manaBarPlayer, hpBarE, manaBarE]

function draw(){
  if (game.state == 'menu') {

  }
  else if (game.state == 'play') {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#b5e9ff";
    ctx.fillRect(0, 0, width, height);

    //DRAW OBJECTS
    for (i = 0; i < objects.length; i++) {

      if (objects[i].shape == 'rect'){
        ctx.fillStyle = objects[i].color;
        ctx.fillRect(objects[i].x, objects[i].y, objects[i].w, objects[i].h)
      }
    }

  }
}

setInterval(draw, 1000/30);
