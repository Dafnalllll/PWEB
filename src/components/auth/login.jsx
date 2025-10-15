import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Proses login di sini
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-slate-200">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-xl bg-white/30 backdrop-blur-lg border border-white/30">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-slate-700 mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Masukkan username"
              autoComplete="username"
              required
            />
          </div>
          <div>
            <label className="block text-slate-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Masukkan password"
              autoComplete="current-password"
              required
            />
          </div>
          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Login
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="flex-1 px-4 py-2 bg-white/70 border border-slate-300 rounded-lg text-slate-700 hover:shadow transition"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
