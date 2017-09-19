$(document).ready(function(){
  $(window).resize(function(){
    if($('header#header').width() >= 905 ) {
      $('div#nav-icon1').removeClass('open');
      $('li.nav-text').show();
    } else {
      $('div#nav-icon1').removeClass('open');
      $('li.nav-text').hide();
    }
  });
});
