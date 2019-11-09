import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        addMusic(newMusic) {
            const music = this.store.createRecord('music', newMusic)
            music.save();
            this.transitionToRoute('index');
        }
    }
});
