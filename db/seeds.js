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
      name: 'Sbujwa'
    },{
      name: 'Hlokoloza Dance'
    },{
      name: 'Yahoozee Dance'
    },{
      name: 'Sgetit Dance'
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
      genre: genres[0],
      description: 'Taken from the streets of durban, this move was created by a musician that takes his influence of kwitao and hip-hop and mixies the to together. What you will see in hes moves is that it is layed back with the movements of hes arms going from left to right',
      videoId: 'https://www.youtube.com/watch?v=mYnsfPVLXeg',
      image: 'https://www.hypemagazine.co.za/wp-content/uploads/2017/03/insta.gif'
    },{
      name: 'Version 2',
      genre: genres[1],
      description: 'Is South African: young, urban, multicultural, and creative. A sub-culture shaping the identity of generations of youth growing up in the townships finding its most prominent expression in an explosive and inventive street dance form that came to prominence in the late 1980s.',
      videoId: 'https://www.youtube.com/watch?v=PYhM2K1i8C4',
      image: 'http://sahiphopmag.co.za/wp-content/uploads/2016/11/sgetititit.png'
    },{
      name: 'Africa special',
      genre: genres[2],
      description: 'A dance created by Jeannora who was a mecanic in Kinshasa from the Democratic Republic of the Congo that started in the 1980s where the hips move back and forth while the hands move to follow the hips.',
      videoId: 'https://www.youtube.com/watch?v=LtJir8CcMKs',
      image: 'http://www.emc3nigeria.com/wp-content/uploads/2016/04/tumblr_kyl5wssAo81qbnncpo1_500.jpg'
    },{
      name: 'Bash',
      genre: genres[3],
      description: 'With their exit came the loud, blasting house-sort of music, then the dance moves, taunting, shouting matches, some alcohol, and street fashion … but at the end of the day it was about the dance.',
      videoId: 'https://www.youtube.com/watch?v=C-PxFPhejZc',
      image: 'https://media.giphy.com/media/kDWPAQBfATe3C/giphy.gif'
    },{
      name: 'Hlokoloza V2',
      genre: genres[4],
      description: 'Hlokoloza dance originated from South Africa. Kwaito artist Arthur Mafokate, introduced Hlokoloza to Africa and the world. Put in his words, "Hlokoloza is a variation on several tonship dances put together with a bit of Hlokoloza swag." Hlokoloza in its current from debuted in 2011 but has taken South Africa by strorm with its patrons characterisstically South African chant of "Ayo-yo!!."',
      videoId: 'https://www.youtube.com/watch?v=AKywndFIVIw',
      image: 'https://i.ytimg.com/vi/n0RCxgtozKk/hqdefault.jpg'
    },{
      name: 'Sgetit Dance',
      genre: genres[5],
      description: 'This is the same move as Van Damme...but can be used with different music',
      videoId: 'https://www.youtube.com/watch?v=RD9FrvWDKx4',
      image: 'https://i.ytimg.com/vi/eX-gMaR8lDQ/maxresdefault.jpg'
    }]);
  })
  .then(dances => console.log(`${dances.length}
  dances created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
