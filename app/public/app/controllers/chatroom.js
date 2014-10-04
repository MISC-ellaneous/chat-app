import Ember from 'ember';

export default Ember.Controller.extend({
  sockets: {
    'chat': function (message) {
      console.log(message);
    }
  }
});
