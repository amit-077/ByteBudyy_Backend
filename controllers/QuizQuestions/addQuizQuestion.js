const { Quiz } = require("../../Database/models/Quiz");

const addQuizQuestion = async (req, res) => {
  try {
    let { quizQuestion, option1, option2, option3, option4, correctOption } =
      req.body;

    let data = await Quiz.create({
      quizQuestion,
      option1,
      option2,
      option3,
      option4,
      correctOption,
    });

    if (data) {
      res.status(200).send("Quiz Question added successfully");
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { addQuizQuestion };
