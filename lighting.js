var loadfunct = function(){
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = rgba(150,255,0,0.2);
  ctx.strokeStyle = rgba(0,0,0,0);
  for(var x = 0; x < c.width; x++){
    for(var y = 0; y < c.height; y++){
      ctx.fillRect(x,y,1,1);
    }
  }
};
