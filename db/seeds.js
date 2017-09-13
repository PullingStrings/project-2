const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const User = require('../models/user');
const Dance = require('../models/dance');
const Genre = require('../models/genre');

const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, {useMongoClient: true});

User.collection.drop();
Dance.collection.drop();
Genre.collection.drop();

User.create({
  username: 'Tito',
  email: 'tito@ga.co',
  password: 'password',
  passwordConfirmation: 'password',
  isAdmin: true
})
  .then(() => {
    console.log('user created!');
    return Genre.create([{
      name: 'Mlazi milano'
    },{
      name: 'Pantsula dance'
    },{
      name: 'kwasa kwasa dance'
    },{
      name: 'Van Damme'
    },{
      name: 'Sgetit (Umgulukudu) Dance'
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
    }]);
  })
  .then((genres) => {
    console.log(`${genres.length} genres created!`);

    return Dance.create([{
      name: 'Taxi driver',
      genre: genres[],
      description: 'The only way to get around the streets',
      videoId: 'https://www.youtube.com/watch?v=mYnsfPVLXeg',
      image: 'https://www.hypemagazine.co.za/wp-content/uploads/2017/03/insta.gif'
    },{
      name: 'Version 2',
      genre: genres[],
      description: 'With practice you will be good at this one',
      videoId: 'https://www.youtube.com/watch?v=PYhM2K1i8C4',
      image: 'http://sahiphopmag.co.za/wp-content/uploads/2016/11/sgetititit.png'
    },{
      name: 'Africa special',
      genre: genres[],
      description: 'You can do this one any where and you will have street crud from all the africans',
      videoId: 'https://www.youtube.com/watch?v=LtJir8CcMKs',
      image: 'http://www.emc3nigeria.com/wp-content/uploads/2016/04/tumblr_kyl5wssAo81qbnncpo1_500.jpg'
    },{
      name: 'Van Damme',
      genre: genres[],
      description: 'New dance style, but you can get around with this one',
      videoId: 'https://www.youtube.com/watch?v=9hdbgsIsyxs',
      image: 'https://media.giphy.com/media/kDWPAQBfATe3C/giphy.gif'
    },{
      name: 'Sgetit Dance version 2',
      genre: genres[],
      description: 'This one will also need some practice...enjoy',
      videoId: 'https://www.youtube.com/watch?v=RD9FrvWDKx4',
      image: 'https://i.ytimg.com/vi/n0RCxgtozKk/hqdefault.jpg'
    },{
      name: 'Hlokoloza Dance Version 2',
      genre: genres[],
      description: 'This is just fun to dance to ',
      videoId: 'https://www.youtube.com/watch?v=ooLQ6avMZr4',
      image: 'https://i.ytimg.com/vi/eX-gMaR8lDQ/maxresdefault.jpg'
    }]);
  })
  .then(dances => console.log(`${dances.length}
  dances created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
