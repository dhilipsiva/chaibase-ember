import request from 'ember-ajax/request';
import ENV from 'chaibase/config/environment';

export default function fingerprint() {
  try {
    return new Fingerprint2().get(function(result, components){
      var items = {}
      components.forEach((component) => {
        items[component.key] = component.value
      });
      var options = {
        method: 'post',
        data: items
      },
      url = [ENV.host, ENV.namespace, ENV.endPoints.fingerprint, result].join("/")
      return request(url, options).then(response => {
        debugger
        return response;
      });
    });
  } catch (e) {
    console.log("Cannot finigerprint browser.");
    console.error(e);
  }
}
