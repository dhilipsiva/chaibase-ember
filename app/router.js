import Ember from 'ember';
import ENV from 'chaibase/config/environment';

const Router = Ember.Router.extend({
  location: ENV.locationType,
  rootURL: ENV.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('authenticated', {path: '/'}, function() {
    this.route('index', {path: '/'});
  });
  this.route('factories');
});

export default Router;
