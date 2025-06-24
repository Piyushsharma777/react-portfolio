const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(console.log("Mongo DB DataBase Start Successfully..."))
    .catch((error) => {
      console.error("DATABASE ERROR: ", error);
      console.log("DATABASE CONNECTION ERROR AND SOME ISSUES");
      process.exit(1);
    });
};
