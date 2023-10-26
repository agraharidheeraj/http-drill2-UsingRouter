const express = require('express');

const router = express.Router();

router.get('/html', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head></head>
      <body>
        <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
        <p>- Martin Fowler</p>
      </body>
    </html>
    `);
});
module.exports = router;
