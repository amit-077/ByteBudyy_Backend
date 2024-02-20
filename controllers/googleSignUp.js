const { User } = require("../Database/models/User");
const md5 = require("md5");
const { createToken } = require("../utils/createToken");

const googleSignUp = async (req, res) => {
  try {
    let { name, email } = req.body;

    let userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).send("User already exists");
      return;
    }

    let password1 = md5(email);

    const data = await User.create({
      name,
      email,
      password: password1,
      googleAuth: true,
    });

    const token = createToken(data._id);
    console.log(token);

    if (data) {
      const { name, email, _id } = data;
      let newUser = { _id, name, email, token: token };
      res.status(200).json(newUser);
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { googleSignUp };
