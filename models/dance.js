const mongoose = require('mongoose');

const danceSchema = new mongoose.Schema({
  name: String,
  genre: { type: mongoose.Schema.ObjectId, ref: 'Genre' },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  description: String,
  videoId: String
});

module.exports = mongoose.model('Dance', danceSchema);
