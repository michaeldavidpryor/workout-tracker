const db = require("../models");
const { request } = require("express");

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    db.Workout.find({}).then(function (dbWorkout) {
      res.json(dbWorkout);
    });
  });

  app.post("/api/workouts/", ({ body }, res) => {
    db.Workout.create(request.params)(body).then((dbWorkout) => {
      res.json(dbWorkout);
    });
  });

  app.put("/api/workouts/:id", function (req, res) {
    db.Workout.findById(req.params.populate).then(function (dbWorkout) {
      res.json(dbWorkout);
    });
  });

  app.get("/api/workouts/range", function (req, res) {
    db.Workout.find({ exercises: req.params.exercises - 7 }).then(function (
      dbWorkout
    ) {
      res.json(dbWorkout);
    });
  });
};

// # Routes
// * `GET /api/workouts` sends an array of all workouts.
// * `POST /api/workouts/` adds a new workout and sends it. New workouts have no exercises, and their `day` field is set to the current time.
// * `PUT /api/workouts/:id` appends the request body to the `exercises` array of the identified workout, then sends the updated workout.
// * `GET /api/workouts/range` sends an array of the 7 most recent workouts.
// * `GET /exercise/` and `GET /stats/` serve `public/exercise.html` and `public/stats.html`, respectively. (And `public` as a whole is served as the static file directory.)

// # Miscellaneous

// - The client expects workout objects returned from the server to have a property whose key is `totalDuration` and whose value is the sum of the `duration` properties of the workout's exercises. There are a number of ways to implement this, and either or both of the routes and the model could be involved, but the easiest way is probably with Mongoose's [virtuals](https://mongoosejs.com/docs/guide.html#virtuals) feature.
// - You shouldn't need to alter the client code in `public` at all.
// - Deploy with Heroku using the `mLab` add-on. See guide in Supplemental. Remember, you can use the configured username and password to interact with the deployed database in the terminal or Robo3T.
