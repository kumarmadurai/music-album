import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';


module('Unit | Component | add-music', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let components = this.owner.lookup('component:add-music');
    assert.ok(components);
  });
  test('should return false', function(assert) {
    let components = this.owner.lookup('component:add-music');
    components.setProperties({
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
    let components = this.owner.lookup('component:add-music');
    components.setProperties({
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