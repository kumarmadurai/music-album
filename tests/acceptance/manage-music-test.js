import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | manage music', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('Should list all available music album details', async function(assert) {
    server.createList('music', 10);

    await visit('/');
    assert.equal(currentURL(), '/');
    assert.dom('[data-test="music-album"]').exists({ count: 10 });
  });
});
