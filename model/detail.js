const mongoose = require("mongoose");
const { Schema } = mongoose;

const DetailSchema = new Schema({
  name: String,
  dob: Number,
  photoUrl: String,
  bp: String,
  careers: String,
  nom: Number,
  score: Number,
  fifties: Number,
  centuries: Number,
  wickets: Number,
  avg: Number,
});

exports.Detail = mongoose.model("Detail", DetailSchema);
