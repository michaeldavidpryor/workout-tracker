var express = require("express");
var mongoose = require("mongoose");
const router = require("./routes/apiRoutes");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}`);
});
