$(document).ready(function(){


  //initializations
  var images = $("#images").children("li");
  var dots = $("#dots").children("li");
  var currentNav, currentPic;


  //initialize nav
  $("#dots").find('li').first().addClass('active');


  function goTo(i){
    $(dots).removeClass('active');
    $("#dots li").eq(i).addClass('active');

    images.fadeOut(400)
        .eq(i).fadeIn(400);
  }



  //Click on new dots button; make active
  $("#dots li").on('click',function(){
    var index = $(this).index();
    goTo(index);
  });

  $("#nxt").on('click',function(){
    //get current Nav index
    currentNav = parseInt($('.active').index());
      if (currentNav <images.length-1){
        goTo(currentNav+1);
      } else {
        goTo(0);
      }
  });

  $("#prev").on('click',function(){
    //get current Nav index
    currentNav = parseInt($('.active').index());
      if (currentNav >0){
        goTo(currentNav-1);
      } else {
        goTo(images.length-1);
      }
  });
  goTo(0);

var timer;

function startTimer() {
    timer = setInterval(function () {
      $("#nxt").trigger('click');
    },5000);
}

// $('.img').hover(function (event) {
//     clearInterval(timer);
// }, function (event) {
//     startTimer();
// });
startTimer();

$('.list').on({
    mouseenter: function() {
      console.log($(this).data('timer'))
        clearInterval(timer)
        clearInterval( $(this).data('timer') );
    },
    mouseleave: function() {
        $(this).data('timer', setInterval(function () {
            $('#nxt').trigger('click');
        }, 4000));
    }
}).trigger('mouseleave');

  //loop to cycle through
  // setInterval(function(){
  //     $("#nxt").trigger('click');
  //   },5000);
});