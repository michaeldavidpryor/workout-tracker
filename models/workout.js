const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  title: String,
  body: String,
});

const workout = mongoose.model("workout", WorkoutSchema);

module.exports = workout;
