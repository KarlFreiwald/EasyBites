const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/index',{page:'Landing page'});
});

router.get('/about', function(req, res, next) {
    res.render('pages/about', {page:'How to'});
});

module.exports = router;
