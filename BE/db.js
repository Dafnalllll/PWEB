const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // ganti sesuai password database kamu
  database: "InventoShoot", // ganti sesuai nama database kamu
});

connection.connect((err) => {
  if (err) {
    console.error("Koneksi database gagal:", err.stack);
    return;
  }
  console.log("Terhubung ke database sebagai id " + connection.threadId);
});

module.exports = connection;
