const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true, // null 여부
    unique: false, // 유니크 여부
  },
  degree : {
    type: String,
  },
  is_alumni : {
    type: Boolean,
  },
  start_year : {
    type : Number
  },
  start_month : {
    type : Number
  },
  end_year : {
    type : Number
  },
  end_month : {
    type : Number
  },
  topic : {
    type : String
  },
  email : {
    type : String
  },
  image_type : {
    type : String
  },
  created : {
    type: Date,
    default: Date.now, // 기본값
  },
});

module.exports = mongoose.model('Student', userSchema);