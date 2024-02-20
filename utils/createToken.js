const jwt = require("jsonwebtoken");

const createToken = (id) => {
  const token = jwt.sign({ userId: id }, "THisIsMyJwTSeCRetOfMYProJeCT", {
    expiresIn: "90 days",
  });

  return token;
};


module.exports = {createToken}
