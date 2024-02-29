const { User } = require("../Database/models/User");
const md5 = require("md5");
const { createToken } = require("../utils/createToken");

const googleLogin = async (req, res) => {
  try {
    let { email } = req.body;

    const userExists = await User.findOne({ email });
    if (!userExists) {
      res.status(400).send("Please create an account");
      return;
    }

    if (userExists.googleAuth && md5(userExists.email) == userExists.password) {
      const token = createToken(userExists._id);

      const { name, email, _id } = userExists;
      let newUser = { _id, name, email, token };
      res.status(200).json(newUser);
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { googleLogin };
