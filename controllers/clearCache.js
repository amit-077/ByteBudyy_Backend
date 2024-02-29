const { myCache } = require("../Redis/redis");

const clearCache = (req, res) => {
  let data = myCache.flushAll();
  res.send("All cache has been cleared");
};

module.exports = { clearCache };
