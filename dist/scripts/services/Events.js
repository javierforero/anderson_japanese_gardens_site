(function(){
  function Events() {
    var Events = {};
    var solar = {
      title: 'Solar Eclipse Viewing Party',
      description1: 'Join us in the garden for a solar eclipse viewing party!',
      description2: 'Food, drinks, and eclipse-viewing glasses will be available for guests.',
      month: 'AUGUST',
      dayofweek: 'MONDAY',
      day_value: '21',
      year: '2017',
      duration: '1PM - 5PM'

    };

    var autumn = {
      title: 'Autumn Equinox Party',
      description1: 'Join us for the Autum Equinox party!',
      description2: 'Complimentary food will be available for guests.',
      month: 'SEPTEMBER',
      dayofweek: 'THURSDAY',
      day_value: '21',
      year: '2017',
      duration: '5PM - 8PM'

    };

    Events.getEvents = function() {
      var eventsArray = [];
      eventsArray.push(solar);
      eventsArray.push(autumn);

      return eventsArray;
    }

    return Events;
  }

  angular
    .module('japaneseGardens')
    .factory('Events', Events);
})();
