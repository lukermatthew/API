const Connection = require("../database/Connection");

module.exports = async (
  id,
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
      `UPDATE ` +
      `users ` +
      `SET ` +
      `username = '${username}', ` +
      `firstname = '${firstname}', ` +
      `lastname = '${lastname}', ` +
      `address = '${address}', ` +
      `postcode = '${postcode}', ` +
      `contact = '${contact}', ` +
      `email = '${email}', ` +
      `username = '${username}', ` +
      `password = '${password}' ` +
      `WHERE ` +
      `id = ${id}`;

    await Connection(query);

    return true;
  } catch (err) {
    return false;
  }
};
