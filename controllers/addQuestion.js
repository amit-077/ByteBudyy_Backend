const { Question } = require("../Database/models/Questions");

const addQuestion = async (req, res) => {
  try {
    // const data = await Question.find();
    // console.log(data);
    const { question, answer, by } = req.body;

    const data = await Question.create({
      question,
      answer,
      by,
    });

    if (data) {
      res.status(200).send("Question added successfully");
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { addQuestion };
