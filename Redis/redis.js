const NodeCache = require("node-cache");
const myCache = new NodeCache();

const setValue = (key, value) => {
  let data = myCache.set(key, value);
  return data;
};

const getValue = (key) => {
  let data = myCache.get(key);
  return data;
};

module.exports = { setValue,getValue, myCache};
