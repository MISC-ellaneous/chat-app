import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver,
  Socket: EmberSockets.extend({
    host: '192.168.59.103',
    port: 3000,
    controllers: ['chatroom']
  })
});

loadInitializers(App, config.modulePrefix);

export default App;
