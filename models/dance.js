const mongoose = require('mongoose');

const danceSchema = new mongoose.Schema({
  name: String,
  genre: { type: mongoose.Schema.ObjectId, ref: 'Genre' },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  description: String,
  videoId: String
});

danceSchema.pre('save', function splitUrl(next){
  if(this.isModified('videoId')) {
    this.videoId = this.videoId.split('v=')[1];
  }
  next();
});

module.exports = mongoose.model('Dance', danceSchema);
