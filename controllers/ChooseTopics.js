const { User } = require("../Database/models/User");

const updateTopics = async (req, res) => {
  try {
    const { topicsArray } = req.body;
    if (topicsArray.length > 4 && topicsArray[0] === "*") {
      topicsArray.shift();
    }
    const user = await User.findByIdAndUpdate(
      req.user,
      { feed: topicsArray },
      { new: true }
    );

    if (user) {
      res.status(200).json(user);
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { updateTopics };
