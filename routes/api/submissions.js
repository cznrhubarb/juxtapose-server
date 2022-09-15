const express = require('express');

const router = express.Router();

const Submission = require('../../models/Submission');

router.get('/', (req, res) => {
  Submission.find()
    .then((submissions) => res.json(submissions))
    .catch((err) => res.status(404).json({ error: err }));
});

router.get('/:id', (req, res) => {
  Submission.findById(req.params.id)
    .then((submission) => res.json(submission))
    .catch((err) => res.status(404).json({ error: err }));
});

router.post('/', (req, res) => {
  Submission.create(req.body)
    .then((submission) => res.json({ message: 'Submission added' }));
});

module.exports = router;
