import Ember from 'ember';
import ENV from 'chaibase/config/environment';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  host: ENV.host,
  namespace: ENV.namespace,
  session: Ember.inject.service(),
  trustedHosts: ['localhost', 'api.chaibase.com'],
  headers: Ember.computed('session.authToken', {
    get() {
      let headers = {};
      const authToken = this.get('session.authToken');
      if (authToken) {
        headers['auth-token'] = authToken;
      }
      return headers;
    }
  })
});
