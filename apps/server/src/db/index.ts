const Mongoose = require("mongoose");
require("dotenv").config();

const uri: string = `${process.env.DB_URI}`;

const connect = async () => {
  Mongoose.connect(uri)
    .then((result: any) => {
      console.log("connected to DB");
    })
    .catch((err: any) => {
      console.log("err: ", err);
    });
};

export default connect;
