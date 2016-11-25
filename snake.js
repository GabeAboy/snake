//canvas stuff
$(document).ready(function(){


  var canvas = $('#canvas')[0];
  var ctx = canvas.getContext('2d');
  var w = $('#canvas').width();
  var h = $('#canvas').height();

  //paint
  //fill-area stroke-perimeter
  //style-color rect-thing
  ctx.fillStyle = "white";
  ctx.fillRect(0,0,w,h);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(0,0,w,h);


  //
  var snakeArray;
  snakeHatchery();
  function snakeHatchery() {
    var length = 5;
    snakeArray = [];
    for (var i = length-1; i >= 0; i--) {
      snakeArray.push({x:i,y:0});
    }
  }
  function paint() {
    for (var i = 0; i < snakeArray.length; i++) {
      var c = snakeArray[i];
      //size of snakeArray cells
      ctx.fillStyle='blue';
      ctx.fillRect(c.x*10,c.y*10,10,10);
      ctx.strokeStyle = 'white';
      ctx.strokeRect(c.x*10,c.y*10,10,10);
    }
  }
  paint();

});
