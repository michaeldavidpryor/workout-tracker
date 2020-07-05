const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  title: String,

  date: {
    type: Date,
    default: Date.now,
  },

  workoutData: {
    type: String,
    name: String,
    distance: Number,
    duration: Number,
    weight: Number,
    sets: Number,
    reps: Number,
  },

  workout: [
    {
      type: Schema.Types.ObjectId,
      ref: "workoutData",
    },
  ],

  date: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
