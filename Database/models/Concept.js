const mongoose = require("mongoose");

const conceptSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    image: {
      type: String,
       required: true
    },
    postedBy: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Concept = mongoose.model("Concept", conceptSchema);

module.exports = { Concept };
