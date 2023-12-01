const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect("mongodb+srv://rajh3282:CT1JW3db5mNRgJMG@db.uu02np9.mongodb.net/BEE ST1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Can't connect to MongoDb"));

// if the connection is successful
db.once("open", () => {
  console.log("Connected to DataBase");
});

module.exports = mongoose; // Change this line
