const express = require('express');

const router = express.Router();

const Creator = require('../../models/Creator');

router.get('/', (req, res) => {
  Creator.find()
    .then((creators) => res.json(creators))
    .catch((err) => res.status(404).json({ error: err }));
});

router.get('/:id', (req, res) => {
  Creator.findById(req.params.id)
    .then((creator) => res.json(creator))
    .catch((err) => res.status(404).json({ error: err }));
});

router.post('/', (req, res) => {
  Creator.create(req.body)
    .then((creator) => res.json({ message: 'Creator added' }));
});

module.exports = router;
