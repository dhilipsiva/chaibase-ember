import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('menu-pane', 'Integration | Component | menu pane', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{menu-pane}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#menu-pane}}
      template block text
    {{/menu-pane}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
