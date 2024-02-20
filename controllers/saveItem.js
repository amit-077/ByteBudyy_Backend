const { User } = require("../Database/models/User");

const saveItem = async (req, res) => {
  try {
    const { item } = req.body;
    let itemExists = await User.find({
      $and: [{ _id: req.user }, { savedItems: item._id }],
    });

    if (itemExists.length > 0) {
      // remove post from saved
      let removeItem = await User.updateOne(
        { _id: req.user },
        { $pull: { savedItems: item._id } }
      );

      if (removeItem) {
        res.status(200).send();
      }
    } else {
      // saved Post
      let savedItem = await User.updateOne(
        { _id: req.user },
        { $push: { savedItems: item._id } }
      );

      if (savedItem) {
        res.status(200).send();
      }
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { saveItem };
