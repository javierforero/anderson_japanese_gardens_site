(function() {
  function NavCtrl() {
    this.open = function() {
      $('div#nav-icon1').toggleClass('open');
      $('li.nav-text').slideToggle('fast');
    };

    this.onResize = function(e){
      console.log('i resized');
    };
  }



  angular
    .module('japaneseGardens')
    .controller('NavCtrl', NavCtrl);
})();
