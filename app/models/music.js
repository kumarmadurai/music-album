import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    artistName: DS.attr('string'),
    albumName: DS.attr('string'),
    genres: DS.attr('string'),
    albumCover: DS.attr(),
    year: DS.attr('number'),  
    spotifyLink: DS.attr()
});
