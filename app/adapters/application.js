import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import AjaxServiceSupport from 'ember-ajax/mixins/ajax-support';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, AjaxServiceSupport, {
  authorizer: 'authorizer:chaibase',
});
