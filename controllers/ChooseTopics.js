const { User } = require("../Database/models/User");
const { setValue } = require("../Redis/redis");

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
      // Cache the data (start)
      setValue(req.user, null);
      // Cache the data (end)
      res.status(200).json(user);
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { updateTopics };
