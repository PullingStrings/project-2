const User = require('../models/user');

function registationsNew(req, res){
  res.render('registrations/new');
}

function registrationsCreate(req, res){
  User
    .create(req.body)
    .then(() => res.redirect('/'))
    .catch((err) => {
      if(err.name === 'ValidationError'){
        return res.status(400).render('registrations/new', { message: 'Passwords do not match'});
      }
      res.status(500).end();
    });
}

module.exports = {
  create: registrationsCreate,
  new: registationsNew
};
