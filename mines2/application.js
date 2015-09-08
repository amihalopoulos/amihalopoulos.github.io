$(document).ready(function() {
  game = new Game(81);
  $('#container').html(game.render())

  $('body').on('mousedown', '.cell', function(event) {
    switch (event.which) {
      case 1:
        game.click(this.id)
        break;
      case 3:
        game.flag(this.id)
        break;
    }
    if (game.checkForWin()){
      alert("YOU WIN! Time: " + $('#clock').text())
    }

    $('#container').html(game.render())
  });
  var sec = 0;
  function pad ( val ) { return val > 9 ? val : "0" + val; }
  function reset () {
    sec = 0

  }
  setInterval( function(){
      $("#seconds").html(pad(++sec%60));
      $("#minutes").html(pad(parseInt(sec/60,10)));
  }, 1000);

  $('#refresh').click(function(event){
    console.log(game)
    game.newGame()
    $('#container').html(game.render())
    reset()
  })

});

