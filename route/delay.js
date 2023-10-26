const express = require('express');

const router = express.Router();

const delayResponse = (req, res, next) => {
  const delay = parseInt(req.params.delay_in_second);
  setTimeout(() => {
    next();
  }, delay * 1000);
};

router.get('/delay/:delay_in_second', delayResponse, (req, res) => {
  res.status(200).send(`Response delay by ${req.params.delay_in_second} seconds with a 200 status`);
});

module.exports = router;
