import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    artistName() {
     return faker.name.firstName();
    },
    albumName() {
        return faker.lorem.word();
    },
    genres() {
        return faker.random.arrayElement(["folk","rap","western"]);
    },
    albumCover() {
        return faker.image.image();
    },
    year() {
        return faker.random.number({min:2000, max:2019});
    },  
    spotifyLink(i) {
        return `https://open.spotify.com/artist/${i}`;
    }
});
