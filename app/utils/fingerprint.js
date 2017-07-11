/*global Fingerprint2*/
/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

import Ember from 'ember';
import request from 'ember-ajax/request';
import ENV from 'chaibase/config/environment';
import randString from 'chaibase/utils/rand-string';

export default function fingerprint() {
  let fingerprint = localStorage.getItem("fingerprint");
  if (typeof(fingerprint) == 'string' && fingerprint.length == 32) {
    return;
  }
  try {
    return new Fingerprint2().get(function(result, components){
      localStorage.setItem("fingerprint", result);
      var items = {};
      components.forEach((component) => {
        items[component.key] = component.value
      });
      var options = {
        method: 'post',
        data: items,
      },
        url = [ENV.host, ENV.namespace, ENV.endPoints.browsers, result].join("/");
      return request(url, options).then(response => {
        return response;
      });
    });
  } catch (e) {
    console.warn("Cannot finigerprint browser.");
    console.error(e);
    finigerprint =localStorage.getItem("finigerprint");
    if (Ember.isEmpty(finigerprint)) {
      localStorage.setItem("fingerprint", randString(32));
    }
  }
}
