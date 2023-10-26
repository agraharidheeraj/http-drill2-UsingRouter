const express = require('express');

const router = express.Router();

router.get('/json', (req, res) => {
  const jsonData = {
    slideshow: {
      author: 'Yours Truly',
      date: 'date of publication',
      slides: [
        {
          title: 'Wake up to WonderWidgets!',
          type: 'all',
        },
        {
          items: [
            'Why <em>WonderWidgets</em> are great',
            'Who <em>buys</em> WonderWidgets',
          ],
          title: 'Overview',
          type: 'all',
        },
      ],
      title: 'Sample Slide Show',
    },
  };
  res.json(jsonData);
});
module.exports = router;
