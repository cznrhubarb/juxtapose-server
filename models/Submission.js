const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  prompt: {
    type: String,
    required: true,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  medium: {
    type: String,
    required: true,
  },
  upvotes: [String],
  creator: {
    type: String,
    required: true,
  },
  mode: {
    type: String,
    default: 'freeplay',
  },
});

const Submission = mongoose.model('submission', SubmissionSchema);
module.exports = Submission;
