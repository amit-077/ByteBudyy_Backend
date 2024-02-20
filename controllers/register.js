const { User } = require("../Database/models/User");
const { createToken } = require("../utils/createToken");

const registerUser = async (req, res) => {
  try {
    // const { name, email, password } = req.body.userData;
    const { name, email, password } = req.body.userData;

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).send("User already exists");
      return;
    }

    const user = await User.create({ name, email, password });
    const token = createToken(user._id);

    if (user) {
      const { name, email, _id } = user;
      let newUser = { _id, name, email, token: token };
      res.status(200).json(newUser);
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = registerUser;
