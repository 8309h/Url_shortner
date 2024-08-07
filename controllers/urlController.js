
const URL = require('../models/urlModels');
const fs = require('fs');

async function createShortUrl(req, res) {
  const {longUrl}  = req.body;

  try {
    let url = await URL.findOne({longUrl});

    if (url) {
      res.json(url);
    } else {
      let shortCode;
      let isShortCodeUnique = false;

      while (!isShortCodeUnique) {
        shortCode = generateShortUrl();
        const existingUrl = await URL.findOne({ shortUrl: shortCode });
        if (!existingUrl) {
          isShortCodeUnique = true;
        }
      }
      const shortUrl = shortCode;
      url = new URL({
        longUrl,
        shortUrl
      });

      await url.save();

      res.json({ longUrl: url.longUrl, shortUrl: url.shortUrl });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}
function generateShortUrl(length = 8) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let shortUrl = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    shortUrl += characters.charAt(randomIndex);
  }
  return shortUrl;
}

async function redirectToLongUrl(req, res) {
  const shortCode = req.params.shortUrl;

  try {
    const url = await URL.findOne({ shortUrl: shortCode });

    if (url) {
      res.redirect(url.longUrl);
    } else {
      res.status(404).send('URL not found');
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}





module.exports = {
  createShortUrl,
  redirectToLongUrl,
};


