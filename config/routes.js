const express = require('express');
const router = express.Router();

// A home router
router.get('/', (req, res ) => res.render('home'));

module.exports = router;
