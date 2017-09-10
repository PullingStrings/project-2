const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Dance = require('../models/dance');
const Genre = require('../models/genre');

const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, {useMongoClient: true});

Dance.collection.drop();
Genre.collection.drop();

Genre.create([{
  name: 'Salsa-Jazz'
}]).then((genres) => {
  console.log(`${genres.length} genres created!`);

  return Dance.create([{
    name: 'Salsa',
    genre: genres[0],
    description: 'dance side to side and make it work',
    videoId: 'https://youtu.be/PWiLi22Cq8w'
  }]);
})
  .then(dances => console.log(`${dances.length}
  dances created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
