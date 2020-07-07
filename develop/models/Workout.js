const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
  },

  exercises: [
    {
      cardio: { type: String },
      name: String,
      duration: Number,
      distance: Number,
    },
    {
      resistance: {
        type: String,
      },
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
