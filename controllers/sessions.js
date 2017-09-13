const User = require('../models/user');

function sessionsNew(req, res){
  res.render('sessions/new');
}

function sessionsCreate(req, res) {
  User
    .findOne({ email: req.body.email })
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)) {
        req.flash('danger', 'Pop in the right credentials and you will be sorted');
        return res.redirect('/login');
      }
      req.session.userId = user.id;
      res.redirect('/dances');
    });
}

function sessionsDelete(req, res) {
  return req.session.regenerate(() => res.redirect('/'));
}

module.exports = {
  create: sessionsCreate,
  new: sessionsNew,
  delete: sessionsDelete
};
