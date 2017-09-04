/* Dependencies */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

/* Schema */
let chatSchema = new Schema({
  chat : Number,
  name : String,
  img : String,
  users : Number
});

module.exports = mongoose.model('Chat', chatSchema);
