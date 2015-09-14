$(document).ready(function() {

  $(".welcome-content").hide();
  $(".list").hide();
  $(".welcome-content").slideToggle(2000);


  $('#project_link').on ('click', function() {
    $('.welcome-content').slideToggle(100)
    $('.list').slideToggle(1000);
  });

});

