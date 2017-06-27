import Ember from 'ember';

const { Service, inject: { service }, isEmpty, RSVP } = Ember;

export default Service.extend({
  session: service(),
  store: service(),

  load() {
    let userId = this.get('session.data.authenticated.user_id');
    if (!isEmpty(userId)) {
      return this.get('store').findRecord('user', userId).then((user) => {
        this.set('user', user);
      });
    } else {
      return RSVP.resolve();
    }
  }
});
