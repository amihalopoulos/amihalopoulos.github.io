$(document).ready(function() {
  $('#beginner').on('click', function(event){
    game = new Game(9,9);
    $('#container').html(game.render())
    clock()
  })
  $('#intermediate').on('click', function(event){
    game = new Game(16,16);
    $('#container').html(game.render())
    clock()
  })
  $('#expert').on('click', function(event){
    game = new Game(30,16);
    $('#container').html(game.render())
    clock()
  })


  $('body').on('mousedown', '.cell', function(event) {
    switch (event.which) {
      case 1:
      // console.log(this.id)
        game.click(this.id.split(' '))
        break;
      case 3:
        game.flag(this.id.split(' '))
        break;
    }
    if (game.checkForWin()){
      alert("YOU WIN! Time: " + $('#clock').text())
    }

    $('#container').html(game.render())
  });


  $('#refresh').click(function(event){
    game.newGame()
    $('#container').html(game.render())
    reset()
  })

});

var clock = function(){
  var sec = 0;
  function pad ( val ) { return val > 9 ? val : "0" + val; }
  function reset () {
    sec = 0
  }
  setInterval( function(){
      $("#seconds").html(pad(++sec%60));
      $("#minutes").html(pad(parseInt(sec/60,10)));
  }, 1000);
}