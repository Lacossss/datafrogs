   var canvas = null;
   var ctx = null;
   var shadi  = {
     x : 5,
     y : 9,
     speed : 50,
     img : "",
    };
   function render(x,y) {
     ctx.clearRect(0,0,500,500);
     ctx.drawImage(froggerImage,x*shadi.speed,y*shadi.speed,shadi.speed,shadi.speed);
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
     render(shadi.x, shadi.y)
   }
   
   document.addEventListener("keydown", function(event) {
     switch(event.keyCode) {
       case 37:
         if (shadi.x > 0) shadi.x -= 1;  
         render(shadi.x, shadi.y);
         break;
       case 38:
         if (shadi.y > 0) shadi.y -= 1;  
         render(shadi.x, shadi.y);
         break;
       case 39:
         if (shadi.x < 9) shadi.x += 1;  
         render(shadi.x, shadi.y);
         break;
       case 40:
         if (shadi.y < 9) shadi.y += 1;  
         render(shadi.x, shadi.y);
         break; 
     }
   
   });


