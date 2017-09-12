const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Dance = require('../models/dance');
const Genre = require('../models/genre');

const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, {useMongoClient: true});

Dance.collection.drop();
Genre.collection.drop();

Genre.create([{
  name: 'Mlazi milano'
},{
  name: 'Azonto Dance'
},{
  name: 'Makossa Dance'
},{
  name: 'Alanta Dance'
},{
  name: 'Mapouka Dance'
},{
  name: 'Yahoozee Dance'
},{
  name: 'Hlokoloza Dance'
},{
  name: 'Bobaraba Dance'
},{
  name: 'Suo Dance'
},{
  name: 'The Galala'
}]).then((genres) => {
  console.log(`${genres.length} genres created!`);

  return Dance.create([{
    name: 'Taxi driver',
    genre: genres[0],
    description: 'The only way to get around the streets',
    videoId: 'https://www.youtube.com/watch?v=mYnsfPVLXeg'
  }]);
})
  .then(dances => console.log(`${dances.length}
  dances created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
