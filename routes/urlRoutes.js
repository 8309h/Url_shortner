

const express = require('express');

const router = express.Router();
const urlController = require('../controllers/urlController');

// Route to create a short URL
router.post('/shorten',urlController.createShortUrl);

// Route to redirect to the original URL
router.get('/:shortUrl', urlController.redirectToLongUrl);


module.exports = router;