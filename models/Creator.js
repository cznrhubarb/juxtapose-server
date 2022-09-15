const mongoose = require('mongoose');
const Submission = require('./Submission');

const CreatorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  submissions: [Submission],
  likedThings: [Submission],
  email: {
    type: String,
    required: true,
  },
});

const Creator = mongoose.model('creator', CreatorSchema);
module.exports = Creator;
