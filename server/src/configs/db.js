// const mongoose = require("mongoose");
// require("dotenv").config();

// let connect = () => {
//   return mongoose.connect("mongodb://127.0.0.1:27017/newbus");
// };

// module.exports= connect;

const mongoose = require("mongoose");

let connect = () => {
  return mongoose.connect(
    "mongodb+srv://dineshsk:Dinesh%401805@cluster0.qe6ha.mongodb.net",
    { useNewUrlParser: true }
  );
};

module.exports = connect;


