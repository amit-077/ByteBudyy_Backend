const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    by: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      default:
        "https://www.techenhancedlife.com/wp-content/uploads/2019/04/brainstorming-scaled.jpg",
    },
  },
  {
    timestamps: true,
  }
);

const Question = mongoose.model("Question", questionSchema);

module.exports = { Question };
