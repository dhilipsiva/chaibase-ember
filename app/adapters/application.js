import DS from 'ember-data';
import ENV from 'chaibase/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend({DataAdapterMixin,
  authorizer: 'authorizer:chaibase',
  host: ENV.host,
  namespace: ENV.namespace,
})
