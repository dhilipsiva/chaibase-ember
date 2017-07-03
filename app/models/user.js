import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  phoneNumber: DS.attr('string'),
  socketUuid: DS.attr('string'),
});
