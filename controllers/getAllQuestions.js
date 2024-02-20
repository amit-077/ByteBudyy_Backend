const { Question } = require("../Database/models/Questions");

const getAllQuestions = async (req, res) => {
  try {
    const data = await Question.find();
    if (data) {
      res.status(200).json(data);
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { getAllQuestions };
