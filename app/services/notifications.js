import Ember from 'ember';
import ENV from 'chaibase/config/environment';

const assign = Ember.assign || Ember.merge;

const {
  ArrayProxy,
  A,
  isEmpty,
  getWithDefault,
  run,
} = Ember;

const Notifications = ArrayProxy.extend({
  content: A(),

  // Method for adding a notification
  addNotification(options) {
    // If no message is set, throw an error
    if (!options.message) {
      throw new Error("No notification message set");
    }
    const notification = Ember.Object.create({
      message: options.message,
      type: options.type || 'is-info',
      onClick: options.onClick,
    });

    this.pushObject(notification);
    this.setupAutoClear(notification, ENV.notifications.clearDuration);

    return notification;
  },

  // Helper methods for each type of notification
  error(message, options) {
    return this.addNotification(assign({
      message: message,
      type: 'is-danger'
    }, options));
  },

  primary(message, options) {
    return this.addNotification(assign({
      message: message,
      type: 'is-primary'
    }, options));
  },

  success(message, options) {
    return this.addNotification(assign({
      message: message,
      type: 'is-success'
    }, options));
  },

  info(message, options) {
    return this.addNotification(assign({
      message: message,
      type: 'is-info'
    }, options));
  },

  warning(message, options) {
    return this.addNotification(assign({
      message: message,
      type: 'is-warning'
    }, options));
  },

  removeNotification(notification) {
    if (!notification) {
      return;
    }

    notification.set('dismiss', true);

    // Delay removal from DOM for dismissal animation
    run.later(this, () => {
      this.removeObject(notification);
    }, ENV.notifications.animationDuration);
  },

  setupAutoClear(notification, delay) {
    run.later(this, () => {
      // Hasn't been closed manually
      if (this.indexOf(notification) >= 0) {
        this.removeNotification(notification);
      }
    }, delay);
  }
});

Notifications.reopenClass({
  isServiceFactory: true
});

export default Notifications;
