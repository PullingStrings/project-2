const express = require('express');
const router = express.Router();
const secureRoute = require('../lib/secureRoute');


const dances = require('../controllers/dances');
const registrations = require('../controllers/registration');
const sessions = require('../controllers/sessions');



// A home router
router.get('/', (req, res ) => res.render('home'));

router.route('/dances')
  .get(dances.index)
  .post(secureRoute, dances.create);

router.route('/dances/new')
  .get(secureRoute, dances.new);

router.route('/dances/:id')
  .get(dances.show)
  .put(secureRoute, dances.update)
  .delete(secureRoute, dances.delete);

router.route('/dances/:id/edit')
  .get(secureRoute, dances.edit);


// register
router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

// login
router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

// logout
router.route('/logout')
  .get(sessions.delete);



module.exports = router;
