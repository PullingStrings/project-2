function secureRoute(req, res, next){
  if(!req.session.userId) {
    return req.session.regenerate(() => {
      req.flash('danger', 'Duuuuuuude...go back you should be logged in.');
      res.redirect('/login');
    });
  }
  next();
}

module.exports = secureRoute;
