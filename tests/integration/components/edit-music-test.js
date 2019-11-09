import { module, test} from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | component | edit-music', function(hooks) {
  setupRenderingTest(hooks)
  test('Should check edit page validation', async function(assert) {
    this.set('model', {
      artistName: '',
      albumName: '',
      albumCover: '',
      geners: '',
      year: '',
      spotifyLink: ''});
    await render(hbs`{{edit-music model=model}}`);
    await click('[data-test="updateMusic"]');
    assert.equal(this.element.querySelector('.alert-danger').textContent.trim(), 'Please enter all fields value.');
  });
});
