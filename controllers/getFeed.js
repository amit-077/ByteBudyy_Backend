const { Concept } = require("../Database/models/Concept");
const { Question } = require("../Database/models/Questions");
const { User } = require("../Database/models/User");
const { setValue, getValue } = require("../Redis/redis");
const { shuffleArray } = require("../utils/shuffleArray");

const getFeed = async (req, res) => {
  try {
    // let cachedData = getValue(req.user);
    // if (cachedData) {
    //   const shuffledConcepts = shuffleArray(cachedData);
    //   console.log("Using cached Data");
    //   res.status(200).send(shuffledConcepts);
    //   return;
    // }

    const user = await User.findOne({ _id: req.user });
    const userFeed = user.feed;
    const concepts =
      userFeed[0] === "*"
        ? await Concept.find()
        : await Concept.find({ tag: { $in: userFeed } });
    const questions = await Question.find();
    const newArray = [...concepts, ...questions];
    // Cache the data (start)
    setValue(req.user, newArray);
    // Cache the data (end)
    const shuffledConcepts = shuffleArray(newArray);
    console.log("Using fresh data");
    res.status(200).send(shuffledConcepts);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { getFeed };
