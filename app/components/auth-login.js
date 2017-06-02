import Ember from 'ember';

export default Ember.Component.extend({
  identification: null,
  password: null,
  session: Ember.inject.service('session'),
  actions: {
    authenticate() {
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:chaibase', identification, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  },
});
