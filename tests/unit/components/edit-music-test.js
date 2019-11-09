import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';


module('Unit | Component | edit-music', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let components = this.owner.lookup('component:edit-music');
    assert.ok(components);
  });
  test('should return false', function(assert) {
    let components = this.owner.lookup('component:edit-music');
    components.set('model', {
      artistName: '',
      albumName: '',
      genres: '',
      albumCover: '',
      year: '',  
      spotifyLink: ''
    })
    assert.equal(components.checkValidation(), false);
  });
    test('should return true', function(assert) {
    let components = this.owner.lookup('component:edit-music');
    components.set('model',{
      artistName: 'test',
      albumName: 'testing',
      genres: 'folk',
      albumCover: 'unit test',
      year: '2018',  
      spotifyLink: 'http://gmail.com'
    })
    assert.equal(components.checkValidation(), true);
  });
});