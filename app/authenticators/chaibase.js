import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  restore(/*data*/) {
  },

  authenticate(identification, password) {
    debugger
  },

  invalidate(/*data*/) {
  }
});
