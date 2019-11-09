import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | add music', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('should create a new music album', async function(assert) {
    await visit('/add');
    await fillIn('#artistName', 'John Nuresh');
    await fillIn('#albumName', 'Feel my love');
    await fillIn('#genres', 'pop');
    await fillIn('#albumCover', 'http://lorempixel.com/640/480/city1');
    await fillIn('#year', '2012');
    await fillIn('#spotifyLink', 'https://open.spotify.com/artist/12');
    await click('[data-test="addMusic"]');

    assert.equal(currentURL(), '/');
    assert.dom('[data-test="music-album"]').exists({ count: 1 });

    await visit('/1/view');
    assert.dom('[data-test="music-artist"]').hasText('John Nuresh');
    assert.dom('[data-test="music-album"]').hasText('Feel my love');
    assert.dom('[data-test="music-genres"]').hasText('pop');
    assert.dom('[data-test="music-year"]').hasText('2012');
    assert.dom('[data-test="music-spotifyLink"]').hasText('https://open.spotify.com/artist/12');
  });
});
