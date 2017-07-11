import Ember from 'ember';
import ENV from 'chaibase/config/environment';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  host: ENV.host,
  namespace: ENV.namespace,
  session: Ember.inject.service(),
  trustedHosts: ['localhost', 'api.chaibase.com'],
  headers: Ember.computed('session.data.authenticated.token', function(){
    return {
      'Authorization': "Basic " + this.get('session.data.authenticated.token'),
      'X-Fingerprint': localStorage.getItem("fingerprint"),
    };
  }),

});
