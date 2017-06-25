import Ember from 'ember';
import Application from '../../app';
import ENV from 'chaibase/config/environment';

export default function startApp(attrs) {
  let attributes = Ember.merge({}, ENV.APP);
  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

  return Ember.run(() => {
    let application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
    return application;
  });
}
