const User = require('../models/user');

function sessionsNew(req, res){
  res.render('sessions/new');
}

function sessionsCreate(req, res) {
  User
    .findOne({ email: req.body.email })
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)) {
        res.status(401).render('sessions/new', { message: 'Put in the right credentials man'});
      }
      req.session.userId = user.id;
      return res.redirect('/dances');
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
