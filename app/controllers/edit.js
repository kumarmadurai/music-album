import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        updateMusic(music) {
            music.save();
            this.transitionToRoute('index');
        }
    }
});
