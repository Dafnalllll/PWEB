const db = require("../db");

const User = {
  register: (username, email, password, callback) => {
    const sql =
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(sql, [username, email, password], callback);
  },

  login: (email, callback) => {
    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], callback);
  },
};

module.exports = User;
