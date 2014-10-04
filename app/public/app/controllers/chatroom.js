import Ember from 'ember';

export default Ember.Controller.extend({
  init: function() {
    console.log(this);
  },

  sockets: {
    'chat': 'message'
  }
});
