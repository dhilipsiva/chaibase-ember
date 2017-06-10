import Ember from 'ember';

export default function reasonOut(reason) {
  var message = Ember.get(reason, 'payload.message');
  console.log(reason);
  if (message != null) {
    return message;
  }
  return "Unable to figure out the reason";
}
