const mongoose = require("mongoose");
const uri_atlas =
  "mongodb+srv://aakhoii:aakhoii207@cluster0.xh59soe.mongodb.net/dacntt2?retryWrites=true&w=majority&appName=Cluster0";
async function connect() {
  try {
    await mongoose.set("strictQuery", true);
    await mongoose.connect(uri_atlas);
    console.log("connect db success");
  } catch (error) {
    console.log("connect db error");
  }
}
module.exports = { connect };
