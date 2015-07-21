$(document).ready(function() {
  game = new Game();
  $('#container').html(game.toHtml());


  ['up', 'right', 'down', 'left'].forEach(function(dir) {
    Mousetrap.bind(dir, function(){
      game.move(dir);
      $('#container').html(game.toHtml());
    });
  });
});