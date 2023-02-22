const Connection = require("../database/Connection");

module.exports = async (fields) => {
  try {
    const query = `SELECT * FROM users`;

    const results = await Connection(query);

    return results;
  } catch (err) {
    return [];
  }
};
