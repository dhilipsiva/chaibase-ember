import Ember from 'ember';
const {computed, inject: {service}} = Ember;

export default Ember.Component.extend({
  notification: null,
  classNames: ["notification"],
  classNameBindings: ["notification.type", "animation"],
  notifications: service(),

  animation: computed('notification.dismiss', function(){
    var animation = 'zoomIn';
    if (this.get("notification.dismiss")) {
      animation = 'zoomOut';
    }
    return "animated " + animation;
  }),

  actions: {
    removeNotification() {
      this.get("notifications").removeNotification(this.get('notification'));
    }
  },
});
