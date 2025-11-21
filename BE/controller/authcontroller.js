const User = require("../models/usermodel");
const bcrypt = require("bcrypt");

exports.register = (req, res) => {
  const { username, email, password } = req.body;

  bcrypt.hash(password, 10, (err, hashed) => {
    if (err) return res.status(500).json({ message: err });

    User.register(username, email, hashed, (err, result) => {
      if (err) return res.status(500).json({ message: err });
      res.status(201).json({ message: "User registered!" });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  User.login(email, (err, result) => {
    if (err) return res.status(500).json({ message: err });
    if (result.length === 0)
      return res.status(404).json({ message: "User not found" });

    const user = result[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (!isMatch) return res.status(400).json({ message: "Wrong password" });

      res.json({ message: "Login successful", user: user });
    });
  });
};
