$(window).scroll(function() {
  var scrolledY = $(window).scrollTop();
  $('.hero').css('background-position', 'left ' + ((scrolledY)) + 'px');
});