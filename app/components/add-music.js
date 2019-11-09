import Component from '@ember/component';

export default Component.extend({
    tagName: 'div',
    classNames: ['music-album__content'],
    showError: false,
    actions: {
      addMusic() {
        if(this.checkValidation()){
          const newMusic = {
            artistName: this.get('artistName'),
            albumName: this.get('albumName'),
            genres: this.get('genres'),
            albumCover: this.get('albumCover'),
            year: this.get('year'),  
            spotifyLink: this.get('spotifyLink'),
          };
          this.submit(newMusic);
        } else {
           this.set('showError', true);
        }

      }
    },
    checkValidation() {           
      if(this.get('artistName') && this.get('albumName') && this.get('genres') && this.get('albumCover') && this.get('year') && this.get('spotifyLink')) {
        return true;
      } else {
        return false;
      }
    }
});
