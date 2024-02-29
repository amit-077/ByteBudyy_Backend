const { User } = require("../Database/models/User");

const getAllSaved = async (req, res) => {
  try {
    const data = await User.findOne({ _id: req.user }).select("savedItems");
    if (data) {
      res.status(200).send(data);
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { getAllSaved };
