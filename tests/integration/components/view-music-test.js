import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | view-music', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    this.set('model', {
      artistName: 'Kuli',
      albumName: 'Nice song',
      genres: 'western',
      albumCover: 'https://open.spotify.com/artist/test',
      year: '2013',
      spotifyLink: 'https://open.spotify.com/artist/21'
    });


    await render(hbs`{{view-music model=model}}`);
    assert.dom('[data-test="music-artist"]').hasText('Kuli');
    assert.dom('[data-test="music-album"]').hasText('Nice song');
    assert.dom('[data-test="music-genres"]').hasText('western');
    assert.dom('[data-test="music-year"]').hasText('2013');
    assert.dom('[data-test="music-spotifyLink"]').hasText('https://open.spotify.com/artist/21');

  });
});
