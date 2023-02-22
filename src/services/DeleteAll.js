const Connection = require("../database/Connection");

module.exports = async (id) => {
  try {
    const query = `DELETE FROM users`;

    await Connection(query);

    return true;
  } catch (err) {
    return false;
  }
};
