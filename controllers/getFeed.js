const { Concept } = require("../Database/models/Concept");
const { Question } = require("../Database/models/Questions");
const { User } = require("../Database/models/User");
const { shuffleArray } = require("../utils/shuffleArray");

const getFeed = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user });
    const userFeed = user.feed;
    const concepts =
      userFeed[0] === "*"
        ? await Concept.find()
        : await Concept.find({ tag: { $in: userFeed } });
    const questions = await Question.find();
    const newArray = [...concepts, ...questions];
    const shuffledConcepts = shuffleArray(newArray);
    res.status(200).send(shuffledConcepts);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { getFeed };
