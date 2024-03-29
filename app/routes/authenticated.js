import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service(),

  beforeModel(transition) {
    this._super(...arguments);
    var currentFactoryId = localStorage.getItem("currentFactoryId");
    if(Ember.isEmpty(currentFactoryId)){
      return this.transitionTo("factories");
    }
  },

  model() {
    return this.store.findRecord("factory", localStorage.getItem("currentFactoryId"))
  },


  actions: {
    invalidate(){
      return this.get('session').invalidate();
    }
  }
});
