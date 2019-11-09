import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | manage-music', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    this.set('model', [{
      artistName: 'sarah',
      albumName: 'Nice song1',
      genres: 'western',
      albumCover: 'https://open.spotify.com/artist/test1',
      year: '2012',
      spotifyLink: 'https://open.spotify.com/artist/211'
    },
    {
      artistName: 'Kuli',
      albumName: 'Nice song2',
      genres: 'rap',
      albumCover: 'https://open.spotify.com/artist/test2',
      year: '2014',
      spotifyLink: 'https://open.spotify.com/artist/212'
    },
    {
      artistName: 'sonal',
      albumName: 'Nice song3',
      genres: 'pop',
      albumCover: 'https://open.spotify.com/artist/test3',
      year: '2015',
      spotifyLink: 'https://open.spotify.com/artist/213'
    }
  ]);
    await render(hbs`{{manage-music model=model}}`);
    assert.dom('[data-test="music-album"]').exists({ count: 3 });
  });
});
