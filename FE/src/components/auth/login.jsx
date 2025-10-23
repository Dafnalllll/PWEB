import React, { useState, useEffect } from "react";
import EyeIcon from "../../components/icon/eyeicon";

const Login = () => {
  useEffect(() => {
    document.title = "Login || InventoShoot";
  }, []);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Proses login di sini
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* AOS wrapper */}
      <div data-aos="zoom-in" data-aos-duration="800">
        <div className="w-[500px] max-w-md p-12 rounded-2xl shadow-xl bg-white/30 backdrop-blur-lg border border-white/30">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Login
          </h2>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-slate-400 mb-2" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white/60 focus:outline-none "
                placeholder="Masukkan username"
                autoComplete="username"
                required
              />
            </div>
            <div className="relative">
              <label className="block text-slate-400 mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white/60 focus:outline-none pr-10"
                placeholder="Masukkan password"
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-[42px] text-slate-500 hover:text-slate-700 cursor-pointer"
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeIcon.EyeOpenIcon />
                ) : (
                  <EyeIcon.EyeClosedIcon />
                )}
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-600 transition-all hover:scale-105 cursor-pointer"
              >
                Login
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 px-4 py-2 bg-white/70 border border-slate-400 rounded-lg text-slate-700 hover:shadow transition-all hover:scale-105 cursor-pointer"
              >
                Reset
              </button>
            </div>
            <div className="mt-4 text-center text-sm text-slate-400">
              Belum daftar?{" "}
              <a
                href="/signup"
                className="text-white hover:underline font-semibold"
              >
                Daftar di sini
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
