(function(root){
  var Snakes = root.Snakes = (root.Snakes || {});

  var Snake = Snakes.Snake = function(){

    this.dir = "N";
    this.segments = [];
    this.segments.push(new Coord(5,5));
    this.segments.push(new Coord(4,5));
    this.segments.push(new Coord(3,5));
    this.segments.push(new Coord(2,5));
  }

  var Coord = Snakes.Coord = function(x,y){
    this.x = x;
    this.y = y;
  }

  Coord.prototype.plus = function(dir){
    switch(dir){
    case "N":
      this.x-=1;
      break;
    case "W":
      this.y-=1;
      break;
    case "E":
      this.y+=1;
      break;
    case "S":
      this.x+=1;
      break;
    }
  }

  Snake.prototype.eatApple = function(appl){
    var opp = ""
    switch(this.dir){
    case "N":
      opp = "S";
      break;
    case "W":
      opp = "E";
      break;
    case "E":
      opp = "W";
      break;
    case "S":
      opp = "N";
      break;
    }
    for (var i =0; i< this.segments.length; i++) {
       appl.plus(opp)
    };

    this.segments.push(appl)
  }

  Snake.prototype.move = function(){
    var snake = this

    for(var i =1; i < this.segments.length; i++){
      var worksegi = snake.segments.length - i

      snake.segments[worksegi].x = snake.segments[worksegi-1].x;
      snake.segments[worksegi].y = snake.segments[worksegi-1].y;
    }

     snake.segments[0].plus(snake.dir);

    this.segments.forEach(function(seg){

      if(seg.x > 19) seg.x = 0;
      if(seg.x < 0) seg.x = 19;
      if(seg.y > 19) seg.y =0;
      if(seg.y < 0) seg.y = 19;

    });
  }

  Snake.prototype.turn = function(nDir){
    this.dir = nDir
  }


})(this);