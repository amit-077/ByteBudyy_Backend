const jwt = require("jsonwebtoken");

const createToken = (id) => {
  const token = jwt.sign({ userId: id }, process.env.JWT_SECRET, {
    expiresIn: "90 days",
  });

  return token;
};


module.exports = {createToken}