const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connected = await mongoose.connect(process.env.MONGO_URI);

    if (connected) {
      console.log("Database connected successfully");
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { connectDB };
