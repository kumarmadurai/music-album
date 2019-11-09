import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | component | add-music', function(hooks) {
  setupRenderingTest(hooks);
  test('Should check empty validations', async function(assert) {
    await render(hbs`{{add-music}}`);
    await click('[data-test="addMusic"]');
    assert.equal(this.element.querySelector('.alert-danger').textContent.trim(), 'Please enter all fields value.');
  });
})