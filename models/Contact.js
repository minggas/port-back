/*
- Contact Prototype-

------------------

name: string [required]

email: string [required]

message: string [required]
*/

const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    unique: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  sended_on: {
    type: Date,
    default: Date.now,
  },
});

exports.Contact = mongoose.model("Contact", ContactSchema);
