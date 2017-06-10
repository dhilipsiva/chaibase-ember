import Ember from 'ember';
import reasonOut from 'chaibase/utils/reason-out';

export default Ember.Component.extend({
  identification: '',
  password: '',
  session: Ember.inject.service(),
  notify: Ember.inject.service(),
  actions: {
    authenticate() {
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate(
        'authenticator:chaibase', identification, password).catch(
          (reason) => {
            this.get('notify').error(reasonOut(reason));
          });
    }
  },
});
