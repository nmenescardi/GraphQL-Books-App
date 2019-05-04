const mongosse = require('mongoose');
const Schema = mongosse.Schema;

const authorSchema = new Schema({
  name: String,
  age: Number
});

module.exports = mongoose.model('Author', authorSchema);
