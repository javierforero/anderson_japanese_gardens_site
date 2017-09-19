(function() {
  function LandingCtrl(Events) {

    var events = Events.getEvents();
    this.currentEvent = events[0];

    this.setCurrentEvent = function(eventPassed) {
      this.currentEvent = eventPassed;
    };
    this.getCurrentEvent = function() {
      return this.currentEvent;
    };

    this.nextEvent = function() {
      var nextIndex = events.indexOf(this.getCurrentEvent())+1 > (events.length - 1) ? 0 : events.indexOf(this.getCurrentEvent())+1;
      this.setCurrentEvent(events[nextIndex]);
    };

    this.prevEvent = function() {
      var prevIndex = events.indexOf(this.getCurrentEvent())-1 < 0 ? (events.length -1) : events.indexOf(this.getCurrentEvent())-1;
      this.setCurrentEvent(events[prevIndex]);
    };


  }

  angular
    .module('japaneseGardens')
    .controller('LandingCtrl',['Events', LandingCtrl]);
})();
