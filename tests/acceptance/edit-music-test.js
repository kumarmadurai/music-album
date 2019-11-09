import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | edit music', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('should edit a exsisting music album', async function(assert) {
    server.createList('music', 1);

    await visit('/1/edit');
    await fillIn('#artistName', 'Sarah mc');
    await fillIn('#albumName', 'Good friend');
    await fillIn('#genres', 'rap');
    await fillIn('#albumCover', 'http://lorempixel.com/640/480/leicester');
    await fillIn('#year', '2013');
    await fillIn('#spotifyLink', 'https://open.spotify.com/artist/20');
    await click('[data-test="updateMusic"]');

    assert.equal(currentURL(), '/');
    assert.dom('[data-test="music-album"]').exists({ count: 1 });

    await visit('/1/view');

    assert.dom('[data-test="music-artist"]').hasText('Sarah mc');
    assert.dom('[data-test="music-album"]').hasText('Good friend');
    assert.dom('[data-test="music-genres"]').hasText('rap');
    assert.dom('[data-test="music-year"]').hasText('2013');
    assert.dom('[data-test="music-spotifyLink"]').hasText('https://open.spotify.com/artist/20');
  });
});
