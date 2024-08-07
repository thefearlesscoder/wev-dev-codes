const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDB = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(console.log("DB connection successfully"))
    .catch((error) => {
      console.log("issue in connecting DB");
      console.log(error);
      process.exit(1);
    });
};

module.exports = connectWithDB;

// , {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }