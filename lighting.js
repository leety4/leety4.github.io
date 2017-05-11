var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "30a0ff00";
ctx.strokeStyle = "00000000";
var loadfunct = function(){
  for(var x = 0; x < c.width; x++){
    for(var y = 0; y < c.height; y++){
      ctx.fillRect(x,y,1,1);
    }
  }
};
