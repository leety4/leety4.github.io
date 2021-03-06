var loadfunct = function(){
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = 'rgba(0,0,0,1)';
  ctx.strokeStyle = 'rgba(0,0,0,0)';
  ctx.fillRect(0,0,c.width,c.height);
  ctx.fillStyle = 'rgba(150,255,0,0.2)';
  for(var x = 0; x < c.width; x++){
    for(var y = 0; y < c.height; y++){
      ctx.fillRect(x,y,1,1);
    }
  }
};
(function(){
"use strict";
document.onmousemove = handleMouseMove;
function handleMouseMove(event) {
  var dot, eventDoc, doc, body, pageX, pageY;
  event = event || window.event; // IE-ism
  if (event.pageX == null && event.clientX != null) {
    eventDoc = (event.target && event.target.ownerDocument) || document;
    doc = eventDoc.documentElement;
    body = eventDoc.body;
    event.pageX = event.clientX +
      (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
      (doc && doc.clientLeft || body && body.clientLeft || 0);
    event.pageY = event.clientY +
      (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
      (doc && doc.clientTop  || body && body.clientTop  || 0 );
  }
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = 'rgba(0,0,0,1)';
  ctx.strokeStyle = 'rgba(0,0,0,0)';
  ctx.fillRect(0,0,c.width,c.height);
  for(var x = 0; x < c.width; x++){
    for(var y = 0; y < c.height; y++){
      var dist = Math.abs(Math.sqrt((x-sqrt(event.pageX))*sqrt((x-event.pageX))+sqrt((y-event.pageY))*sqrt((y-event.pageY))));
      var alpha = 1/(dist/10*0.8+1.1);
      if(alpha < 0.1){
        alpha = 0.1;
      }
      ctx.fillStyle = 'rgba(150,255,0,'+alpha+')';
      ctx.fillRect(x,y,1,1);
    }
  }
}
})();
