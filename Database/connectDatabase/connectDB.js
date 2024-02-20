const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connected = await mongoose.connect("mongodb+srv://amitkamat918:WEBSTAr0472@cluster0.fywpj0h.mongodb.net/CodeBytes?retryWrites=true&w=majority");

    if (connected) {
      console.log("Database connected successfully");
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { connectDB };
