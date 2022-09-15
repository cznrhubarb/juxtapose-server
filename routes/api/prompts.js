const express = require('express');
const seedrandom = require('seedrandom');
const nounList = require('../../nounlist');

const router = express.Router();

router.get('/', (req, res) => {
  const { mode } = req.query;

  let random;
  if (mode === 'comptetive') {
    const { date } = req.query;

    random = seedrandom(date);
  } else {
    random = seedrandom();
  }

  const randomWord = () => nounList[Math.abs(random.int32()) % nounList.length];

  res.send({ prompt: `${randomWord()} ${randomWord()}` });
});

module.exports = router;
