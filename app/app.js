import Ember from 'ember';
import Resolver from './resolver';
import ENV from 'chaibase/config/environment';
import fingerprint from 'chaibase/utils/fingerprint';
import loadInitializers from 'ember-load-initializers';

let App;

// Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: ENV.modulePrefix,
  podModulePrefix: ENV.podModulePrefix,
  Resolver
});

loadInitializers(App, ENV.modulePrefix);

fingerprint();

export default App;
