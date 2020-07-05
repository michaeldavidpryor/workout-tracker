const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  title: String,
  body: String,
});

const Workouts = mongoose.model("Workouts", workoutSchema);

module.exports = Workouts;
