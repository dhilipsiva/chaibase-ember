import request from 'ember-ajax/request';
import ENV from 'chaibase/config/environment';
import randString from 'chaibase/utils/rand-string';

export default function fingerprint() {
  if (typeof(localStorage.fingerprint) == 'string' && localStorage.fingerprint.length == 32) {
    return
  }
  try {
    return new Fingerprint2().get(function(result, components){
      localStorage.fingerprint = result;
      var items = {}
      components.forEach((component) => {
        items[component.key] = component.value
      });
      var options = {
        method: 'post',
        data: items,
      },
        url = [ENV.host, ENV.namespace, ENV.endPoints.browsers, result].join("/")
      return request(url, options).then(response => {
        return response;
      });
    });
  } catch (e) {
    console.log("Cannot finigerprint browser.");
    console.error(e);
    if (Ember.isEmpty(localStorage.finigerprint)) {
      localStorage.fingerprint = randString(32);
    }
  }
}
