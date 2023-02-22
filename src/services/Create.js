const Connection = require("../database/Connection");

module.exports = async (
  firstname,
  lastname,
  address,
  postcode,
  contact,
  email,
  username,
  password
) => {
  try {
    const query =
      `INSERT INTO ` +
      `users ` +
      `VALUES ` +
      `(null, '${firstname}', '${lastname}', '${address}', '${postcode}', '${contact}', '${email}', '${username}', '${password}')`;

    await Connection(query);

    return true;
  } catch (err) {
    return false;
  }
};
