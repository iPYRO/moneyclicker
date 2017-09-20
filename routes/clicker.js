const express = require('express');
const router = express.Router();

/* GET clicker page. */
router.get('/', function(req, res, next) {
  res.render('clicker', { title: 'Money Clicker' });
});

module.exports = router;
