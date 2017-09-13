const mongoose = require('mongoose');

const danceSchema = new mongoose.Schema({
  name: String,
  genre: { type: mongoose.Schema.ObjectId, ref: 'Genre' },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  description: String,
  videoId: String,
  image: String
});

danceSchema.pre('save', function splitUrl(next){
  if(this.isModified('videoId')) {
    this.videoId = this.videoId.match(/[A-z1-9]{11}/);
  }
  next();
});

module.exports = mongoose.model('Dance', danceSchema);
