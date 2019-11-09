import Component from '@ember/component';

export default Component.extend({
  tagName: 'div',
  classNames: ['music-album__content'],
  showError: false,
  actions: {
    updateMusic(music) {
      if(this.checkValidation()){
        this.update(music);
      } else {
        this.set('showError', true);
      }
    }
  },
  checkValidation() {           
    if(this.get('model.artistName') && this.get('model.albumName') && this.get('model.genres') && this.get('model.albumCover') && this.get('model.year') && this.get('model.spotifyLink')) {
      return true;
    } else {
      return false;
    }
  }
});
