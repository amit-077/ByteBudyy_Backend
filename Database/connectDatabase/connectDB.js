const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connected = await mongoose.connect("mongodb+srv://ami_t918:RV9M8boFNG9CU2ik@cluster0.fywpj0h.mongodb.net/?retryWrites=true&w=majority&srvMaxHosts=3", {useNewUrlParser:true,useUnifiedTopology: true });

    if (connected) {
      console.log("Database connected successfully");
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { connectDB };
