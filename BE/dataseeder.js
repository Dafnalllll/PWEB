const db = require("./db");

// Contoh data user
const users = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "user1", password: "user123", role: "user" },
];

// Fungsi untuk insert data user
users.forEach((user) => {
  db.query(
    "INSERT INTO users (username, password, role) VALUES (?, ?, ?)",
    [user.username, user.password, user.role],
    (err, results) => {
      if (err) {
        console.error("Gagal insert user:", err);
      } else {
        console.log("Berhasil insert user:", user.username);
      }
    }
  );
});

// Tutup koneksi setelah selesai
setTimeout(() => db.end(), 1000);
