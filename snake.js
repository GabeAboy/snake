//canvas stuff
$(document).ready(function(){


  var canvas = $('#canvas')[0];
  var ctx = canvas.getContext('2d');
  var w = $('#canvas').width();
  var h = $('#canvas').height();
  var cw = 10;//cell width
  //paint
  //fill-area stroke-perimeter
  //style-color rect-thing
  // x y width height
  // ctx.fillStyle = "white";
  // ctx.fillRect(0,0,w,h);//x y width height
  // ctx.strokeStyle = 'black';//y goes down
  // ctx.strokeRect(0,0,w,h);
  //
  // //
  var snakeArray;
  snakeHatchery();
  //1 make
  function snakeHatchery() {
    //pushing an object for each cell giving it
    //its own x and y coordinate
    var length = 5;
    snakeArray = [];
    for (var i = length-1; i >= 0; i--) {
      snakeArray.push({x:i,y:0});
    }
  }
  function paint() {
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,w,h);//x y width height
    ctx.strokeStyle = 'black';//y goes down
    ctx.strokeRect(0,0,w,h);

    var nx = snakeArray[0].x;
    var ny = snakeArray[0].y;
    nx++;
    var tail = snakeArray.pop();
    tail.x = nx;
    snakeArray.unshift(tail);

    for (var i = 0; i < snakeArray.length; i++) {
      var c = snakeArray[i];
      //size of snakeArray cells
      ctx.fillStyle='blue';
      ctx.fillRect(c.x*cw,c.y*cw,cw,cw);
      ctx.strokeStyle = 'white';
      ctx.strokeRect(c.x*cw,c.y*cw,cw,cw);
    }
  }
  paint();

game_loop = setInterval(paint,1000);


});
