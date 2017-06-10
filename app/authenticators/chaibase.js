import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import ENV from 'chaibase/config/environment';

export default Base.extend({
  ajax: Ember.inject.service(),
  restore(/*data*/) {
  },

  authenticate(identification, password) {
    var ajax = this.get("ajax");
    var url = [ENV.host, ENV.namespace, ENV['ember-simple-auth']['loginEndPoint']].join("/")
    return ajax.post(url, {data: {identification, password}});
  },

  invalidate(/*data*/) {
  }
});
