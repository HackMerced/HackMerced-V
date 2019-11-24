const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
  },
  hacker: { type: mongoose.Schema.Types.ObjectId, ref: 'Hacker' },
});

module.exports = mongoose.model('Team', teamSchema);