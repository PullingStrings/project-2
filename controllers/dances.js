const Dance = require('../models/dance');
const Genre = require('../models/genre');

function dancesIndex(req, res){
  Dance
    .find()
    .populate('genre user')
    .exec()
    .then((dances) => res.render('dances/index', { dances }))
    .catch(err => res.render('error', { err }));
}

function dancesShow(req, res){
  Dance
    .findById(req.params.id)
    .populate('genre user')
    .exec()
    .then((dance) => res.render('dances/show', { dance }))
    .catch(err => res.render('error', { err }));
}


function dancesNew(req, res){
  Genre
    .find()
    .exec()
    .then((genres) => res.render('dances/new', { genres }))
    .catch(err => res.render('error', { err }));
}

function dancesCreate(req, res){
  req.body.user = req.currentUser; // the video is owned by the user who is logged in
  Dance
    .create(req.body)
    .then(() => res.redirect('/dances'))
    .catch(err => res.render('error',  { err }));
}
function danceEdit(req, res){
  Dance
    .findById(req.params.id)
    .exec()
    .then((dance) => {
      return Genre
        .find()
        .exec()
        .then((genres) => res.render('dances/edit', { dance, genres }));
    })
    .catch(err => res.render('error',  { err }));
}

function danceUpdate(req, res){
  Dance
    .findById(req.params.id)
    .exec()
    .then(dance => {
      dance = Object.assign(dance, req.body);
      return dance.save();
    })
    .then(dance => res.redirect(`/dances/${dance.id}`))
    .catch(err => res.render('error',  { err }));
}

function danceDelete(req, res){
  Dance
    .findById(req.params.id)
    .exec()
    .then(dance =>{
      return dance.remove();
    })
    .then(()=> res.redirect('/dances'))
    .catch(err => res.render('error',  { err }));
}



module.exports = {
  index: dancesIndex,
  show: dancesShow,
  new: dancesNew,
  create: dancesCreate,
  edit: danceEdit,
  update: danceUpdate,
  delete: danceDelete
};
