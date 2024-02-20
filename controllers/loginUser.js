const { User } = require("../Database/models/User");
const { createToken } = require("../utils/createToken");

const loginUser = async (req, res) => {
  try {
    // const { name, email, password } = req.body.userData;
    const { email, password } = req.body.userData;

    const userExists = await User.findOne({ email });

    if (!userExists) {
      res.status(401).send("User does not exist");
      return;
    }

    if (userExists && userExists.password === password) {
      const token = createToken(userExists._id);
      const { _id, name, email } = userExists;
      let newUser = { _id, name, email, token: token };
      res.status(200).json(newUser);
    } else {
      res.status(400).send("Wrong credentials");
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = loginUser;
