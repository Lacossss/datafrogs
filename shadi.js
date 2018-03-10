var canvas = null;
var ctx = null;
const existingEnemies = [];
var shadi  = {
  x : 5,
  y : 9,
  speed : 50,
  img : "",
};

const lines = {
  line1: {
    speed: 50,
    direction: -1,
    x: 500,
    y: 100
  },
  line2: {
    speed: 50,
    direction: -1,
    x: 500,
    y: 150
  },
  line3: {
    speed: 50,
    direction: -1,
    x: 500,
    y: 200
  },
  line4: {
    speed: 50,
    direction: 1,
    x: -50,
    y: 300
  },
  line5: {
    speed: 50,
    direction: 1,
    x: -50,
    y: 350
  },
  line6: {
    speed: 50,
    direction: 1,
    x: -50,
    y: 400
  },
}

const enemies = {
  bus: function(line) {
    this.x = line.x;
    this.y = line.y;
    this.speed = line.speed;
    this.image = new Image(50, 50);
    this.image.src = 'SzaboAdam.jpg';
    this.direction = line.direction;
  },

  car: function(line) {
    this.x = line.x;
    this.y = line.y;
    this.speed = line.speed;
    this.image = new Image(50, 50);
    this.image.src = 'SzaboAdam.jpg';
    this.direction = line.direction;
  },

  motor: function(line) {
    this.x = line.x;
    this.y = line.y;
    this.speed = line.speed;
    this.image = new Image(50, 50);
    this.image.src = 'SzaboAdam.jpg';
    this.direction = line.direction;
  },

  TEK: function(line) {
    this.x = line.x;
    this.y = line.y;
    this.speed = line.speed;
    this.image = new Image(50, 50);
    this.image.src = 'SzaboAdam.jpg';
    this.direction = line.direction;
  }
}

function getLine(line) {
  return lines['line'+line];
};

function getRandomLine() {
  return Math.round(Math.random() * (6 - 1) + 1);
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

  var enemyStarter = setInterval(function() {
    var line = getRandomLine();
    existingEnemies.push(new enemies.car(getLine(line)));
  }, 1000)

  var enemyStarter2 = setInterval(function() {
    var line = getRandomLine();
    existingEnemies.push(new enemies.car(getLine(line)));
  }, 1000)

  var carTimeout = setInterval(function() {
    ctx.clearRect(0,0,500,500);
    existingEnemies.forEach(function(item) {
      item.x += (item.speed * item.direction);
      renderEnemy(item);
      renderShadi(shadi.x, shadi.y);
    });

  }, 100);
}

function explosion(lifes, pos_x, pos_y) {
  console.log("lofasz")
 
  document.getElementById("explosion_container").style ="position:absolute;" + "top: " + pos_x + "px;"  + "left: " + pos_y + "px;";
  document.getElementById("explosion_img").src="Game/explosion1.gif"
  
  console.log(current_visual_source);
  
};
