const express = require('express');

const router = express.Router();
const { v4: uuid4 } = require('uuid');

router.get('/uuid', (req, res) => {
  const generatorUUId = uuid4();
  res.json({ uuid: generatorUUId });
});

module.exports = router;
