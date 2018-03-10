var canvas = null;
var ctx = null;
let  existingEnemies = [];
var enemyStarter = null;
var enemyStarter2 = null; 
var carTimeout = null;
var isGameOver = false;


var shadi  = {
  x : 250,
  y : 450,
  speed : 50,
  img : "",
};

const lines = {
  line1: {
    speed: 70,
    direction: -1,
    x: 500,
    y: 100,
  },
  line2: {
    speed: 30,
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
    speed: 10,
    direction: 1,
    x: -50,
    y: 250
  },
  line5: {
    speed: 50,
    direction: 1,
    x: -50,
    y: 300
  },
  line6: {
    speed: 30,
    direction: 1,
    x: -50,
    y: 350
  },
  line7: {
    speed: 20,
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
    this.image = new Image(150, 50);
    this.image.src = 'Game/szmokibusz.png';
    this.direction = line.direction;
    this.type = 'bus';
  },

  car: function(line) {
    this.x = line.x;
    this.y = line.y;
    this.speed = line.speed;
    this.image = new Image(50, 50);
    this.image.src = 'Game/kocsi.png';
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
    this.image.src = 'Game/tek_kicsi.png';
    this.direction = line.direction;
  },
  Soros: function(line) {
    this.x = line.x;
    this.y = line.y;
    this.speed = line.speed;
    this.image = new Image(50, 50);
    this.image.src = 'Game/SOROS.png';
    this.direction = line.direction;
  },
  Anjan: function(line) {
    this.x = line.x;
    this.y = line.y;
    this.speed = line.speed;
    this.image = new Image(50, 50);
    this.image.src = 'Game/Anjanka.jpg';
    this.direction = line.direction;
  },
  Gunics: function(line) {
    this.x = line.x;
    this.y = line.y;
    this.speed = line.speed;
    this.image = new Image(50, 50);
    this.image.src = 'Game/Gunicska.jpg';
    this.direction = line.direction;
  }      
}

function getLine(line) {
  return lines['line'+line];
};

function getRandomLine() {
  return Math.floor(Math.random() * (7 - 1 + 1)) + 1;
}

function renderShadi(x, y) {
  ctx.drawImage(froggerImage, x, y, shadi.speed, shadi.speed);
}

function renderEnemy(enemy) {
  ctx.drawImage(enemy.image, enemy.x, enemy.y, enemy.type === 'bus' ? 150 : 50, 50);
}

background = new Image();
background.src = 'Game/background.png';
background.onload = function() {
  froggerImage = new Image();
  froggerImage.src = "SzaboAdam.jpg";
  froggerImage.onload = function() {
    canvas = document.createElement("canvas");
    canvas.style = "border:1px solid #d3d3d3;";
    ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 500;
    const gameCanvas = document.getElementById('game');
    gameCanvas.appendChild(canvas);
    ctx.drawImage(background, 0, 0, 500, 500);
    renderShadi(shadi.x, shadi.y)
  
    startGame();
  }
}  
document.addEventListener("keydown", function(event) {
  if (!isGameOver) {
  switch(event.keyCode) {
    case 37:
      if (shadi.x > 0) shadi.x -= shadi.speed;  
      renderShadi(shadi.x, shadi.y);
      break;
    case 38:
      if (shadi.y > 0) shadi.y -= shadi.speed;  
      renderShadi(shadi.x, shadi.y);
      break;
    case 39:
      if (shadi.x < 450) shadi.x += shadi.speed;  
      renderShadi(shadi.x, shadi.y);
      break;
    case 40:
      if (shadi.y < 450) shadi.y += shadi.speed;  
      renderShadi(shadi.x, shadi.y);
      break; 
  }
  } 
});

function startGame() {
  isGameOver = false;
  existingEnemies = [];
  shadi.x = 250;
  shadi.y = 450;
  document.getElementById("explosion_container").style.display = "none";
  generateRandomEnemies();
}

function generateRandomEnemies() {

  var enemyStarter = setInterval(function() {
    var line = getRandomLine();
    switch (line) {
      case 1:
        existingEnemies.push(new enemies.TEK(getLine(line)));
        break;
      case 4:
        existingEnemies.push(new enemies.Soros(getLine(line)));
        break;
      case 5:
        existingEnemies.push(new enemies.Anjan(getLine(line)));
        break;
      case 6:
        existingEnemies.push(new enemies.Gunics(getLine(line)));
        break;
      case 7:
        existingEnemies.push(new enemies.bus(getLine(line)));
        break;     
      default:
        existingEnemies.push(new enemies.car(getLine(line)));
        break;       
    }
  }, 1000)

  var enemyStarter2 = setInterval(function() {
    var line = getRandomLine();
    existingEnemies.push(new enemies.car(getLine(line)));
  }, 1000)

  var carTimeout = setInterval(function() {
    ctx.clearRect(0,0,500,500);
    ctx.drawImage(background, 0, 0, 500, 500);
    existingEnemies.forEach(function(item,i) {
      item.x += (item.speed * item.direction);
      if ((item.direction === 1 && item.x >= 500) || (item.direction === -1 && item.x <= -50)) {
        existingEnemies.splice(i,1)
      } else {
        renderEnemy(item);
      }

      renderShadi(shadi.x, shadi.y);

      if ( shadi.y === item.y && Math.abs(item.x - shadi.x) < 50 ) {
        isGameOver = true;
        explosion(1,shadi.x-50,shadi.y-50);
        clearInterval(enemyStarter);
        clearInterval(enemyStarter2);
        clearInterval(carTimeout);
      }
    }); 
  }, 100);
}

function explosion(lifes, pos_x, pos_y) {
  console.log("lofasz")
  document.getElementById("explosion_container").style ="position:absolute;" + "top: " + pos_y + "px;"  + "left: " + pos_x + "px;";
  document.getElementById("explosion_img").src="Game/explosion1.gif"
  $('#explosion_container').delay(2000).hide(0);
  var audio = new Audio('soundeffects/robbanas/explosion1.mp3');
  audio.play();
  //console.log(current_visual_source);
};
