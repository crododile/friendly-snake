(function(root){

  var Snakes = root.Snakes = (root.Snakes || {});

  var Board = Snakes.Board = function() {
    this.snake = new Snakes.Snake();
    this.board = this.makeBoard();
    this.apples = []
    this.makeApple();

  }

  Board.prototype.placeSnake = function(){
    var taht = this

    this.snake.segments.forEach( function(seg){
      taht.board[seg.x][seg.y] = "S";
    })
  }

  Board.prototype.render = function() {
    this.board = this.makeBoard();

    this.placeSnake();
    this.placeApples();
    this.eatApples();
    this.board.forEach(function(row){

      console.log(row, "\n");
    })
  }

  Board.prototype.makeBoard = function () {
    return _.times(10, function (i) {
      return _.times(10, function (j) {
        return ".";
      });
    });
  };



  Board.prototype.eatApples = function(){

    var that = this
    for(var i = 0; i < this.apples.length; i ++){
      if(this.apples[i].x === this.snake.segments[0].x &&
         this.apples[i].y === this.snake.segments[0].y){
        this.snake.eatApple(this.apples[i]);
        this.apples.slice(i,1);
        this.makeApple();
      };
    }
  }

  Board.prototype.makeApple = function(){
    var ax = Math.floor(Math.random()*this.board.length);
    var ay = Math.floor(Math.random()*this.board.length);
    this.apples.push(new Snakes.Coord(ax,ay));
    return
  }

  Board.prototype.placeApples = function(){
    var taht = this;
    this.apples.forEach( function(appl){
      taht.board[appl.x][appl.y] = "A";
    })
  }

})(this);
