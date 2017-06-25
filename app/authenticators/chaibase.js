import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import ENV from 'chaibase/config/environment';

export default Base.extend({
  ajax: Ember.inject.service(),
  restore(data) {
    var ajax = this.get("ajax");
    return ajax.post(ENV['ember-simple-auth']['checkEndPoint'], {data: data});
  },

  authenticate(identification, password) {
    var ajax = this.get("ajax");
    return ajax.post(ENV['ember-simple-auth']['loginEndPoint'], {data: {identification, password}});
  },

  invalidate(data) {
    var ajax = this.get("ajax");
    return ajax.post(ENV['ember-simple-auth']['logoutEndPoint'], {data: data});
  },

});
