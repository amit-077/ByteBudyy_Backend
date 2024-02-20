const { User } = require("../Database/models/User");

const getSavedItems = async (req, res) => {
  try {
    const data = await User.findOne({ _id: req.user })
      .populate("savedItems")
      .select("savedItems");

    if (data) {
      res.status(200).send(data);
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { getSavedItems };
