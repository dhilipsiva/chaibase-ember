import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(){
    return this.get("store").findAll("factory")
  },
  afterModel(factories, transition) {
    if (factories.get('length') === 0) {
      this.transitionTo('factories.create');
    }
    else if (factories.get('length') === 1) {
      let factory = factories.get('firstObject');
      transition.send("selectFactory", factory.get("id"));
    }
  },
  actions: {
    selectFactory(factoryId){
      localStorage.setItem("currentFactoryId", factoryId);
      return this.transitionTo("authenticated.index");
    }
  }
});
