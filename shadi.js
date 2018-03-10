var canvas = null;
var ctx = null;
const existingEnemies = [];
var shadi  = {
  x : 5,
  y : 9,
  speed : 50,
  img : "",
};

const enemies = {
  bus: function(x, y, direction) {
    this.x = x;
    this.y = y;
    this.speed = getRandomSpeed(50, 100);
    this.image = new Image(50, 50);
    this.image.src = 'SzaboAdam.jpg';
    this.direction = direction;
  },

  car: function(x, y, direction) {
    this.x = x;
    this.y = y;
    this.speed = getRandomSpeed(10, 75);
    this.image = new Image(50, 50);
    this.image.src = 'SzaboAdam.jpg';
    this.direction = direction;
  },

  motor: function(x, y, direction) {
    this.x = x;
    this.y = y;
    this.speed = getRandomSpeed(50, 100);
    this.image = new Image(50, 50);
    this.image.src = 'SzaboAdam.jpg';
    this.direction = direction;
  },

  TEK: function(x, y, direction) {
    this.x = x;
    this.y = y;
    this.speed = getRandomSpeed(50, 100);
    this.image = new Image(50, 50);
    this.image.src = 'SzaboAdam.jpg';
    this.direction = direction;
  }
}

function getRandomSpeed(min, max) {
  return Math.random() * (max - min) + min;
}

function renderShadi(x, y) {
  ctx.drawImage(froggerImage, x*shadi.speed, y*shadi.speed, shadi.speed, shadi.speed);
}

function renderEnemy(enemy) {
  ctx.drawImage(enemy.image, enemy.x, enemy.y, 50, 50);
}

froggerImage = new Image();
froggerImage.src = "SzaboAdam.jpg";
froggerImage.onload = function() {
  canvas = document.createElement("canvas");
  canvas.style = "border:1px solid #d3d3d3;";
  ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;
  document.body.appendChild(canvas);
  renderShadi(shadi.x, shadi.y)

  startGame();
}
   
document.addEventListener("keydown", function(event) {
  switch(event.keyCode) {
    case 37:
      if (shadi.x > 0) shadi.x -= 1;  
      renderShadi(shadi.x, shadi.y);
      break;
    case 38:
      if (shadi.y > 0) shadi.y -= 1;  
      renderShadi(shadi.x, shadi.y);
      break;
    case 39:
      if (shadi.x < 9) shadi.x += 1;  
      renderShadi(shadi.x, shadi.y);
      break;
    case 40:
      if (shadi.y < 9) shadi.y += 1;  
      renderShadi(shadi.x, shadi.y);
      break; 
  }
});

function startGame() {
  generateRandomEnemies();
}

function generateRandomEnemies() {

  // var enemyStarter = setInterval(function() {
  //   existingEnemies.push(new enemies.car(-50, 350));
  // }, 1000)

  var carTimeout = setInterval(function() {
    ctx.clearRect(0,0,500,500);
    existingEnemies.forEach(function(item) {
      item.x += item.speed;
      renderEnemy(item);
      renderShadi(shadi.x, shadi.y);
    });

  }, 100);
}
