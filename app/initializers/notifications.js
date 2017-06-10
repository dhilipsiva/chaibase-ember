export function initialize(application) {
  application.inject('component:notification-container', 'notifications', 'service:notifications');
}

export default {
  name: 'notifications',
  initialize
};
