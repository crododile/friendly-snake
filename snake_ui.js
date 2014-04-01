(function(root){

  var Snakes = root.Snakes = (root.Snakes || {});

  var View = Snakes.View = function (board, el, document){
    this.board = board;
    this.$el = $(el);
    this.$doc = document
  }

  View.prototype.start = function(){
    var that = this;
    $(this.$doc).on('keydown', function(e){that.handleKeyEvent(e)});
    setInterval(that.step.bind(that), 200);

  }

  View.prototype.handleKeyEvent = function(event){
    console.log(event.keyCode);
    switch(event.keyCode){
     case 38: this.board.snake.turn("N"); break;
     case 40: this.board.snake.turn("S"); break;
     case 37: this.board.snake.turn("W"); break;
     case 39: this.board.snake.turn("E"); break;
   }
  }

  View.prototype.step = function() {
    var that = this;

   this.board.snake.move();
    this.board.placeSnake();
    this.board.render();

    this.render();
  }

  View.prototype.render = function(){
    console.log("hi")
    $el.empty()
    this.board.board.forEach(function(row){
      var $div = $("<div></div>")
      row.forEach(function(spot){

        if (spot === "S") $div.append("<div class='green'></div>");
        else if (spot === "A") $div.append("<div class='apple'></div>");
        else $div.append("<div class='white'></div>");
      });
      $el.append($div)
    });
  }


})(this);