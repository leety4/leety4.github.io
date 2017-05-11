var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.fill(150,255,100,0.2);
ctx.noStroke();
for(var x = 0; x < 800; x++){
  for(var y = 0; y < 800; y++){
    ctx.fillRect(x,y,1,1);
  }
}
