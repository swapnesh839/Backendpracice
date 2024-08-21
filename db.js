import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connect("mongodb://localhost:27017/school", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  })


  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("Connected successfully");
  });

  db.on("disconnected", function () {
    console.log("MongoDB disconnected");
  })

  db.on("reconnected", function () {
    console.log("MongoDB reconnected");
  })
}

export default connectDB