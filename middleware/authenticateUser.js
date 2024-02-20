const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  try {
    const { token } = req.query;
    const {userId} = jwt.verify(token, "THisIsMyJwTSeCRetOfMYProJeCT");
    req.user = userId;
    next();
  } catch (e) {
    console.log(e);
  }
};

module.exports = { authenticateUser };
