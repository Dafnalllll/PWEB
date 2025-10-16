import React, { useState, useEffect } from "react";
import EyeIcon from "../../components/icon/eyeicon";
const Signup = () => {
  useEffect(() => {
    document.title = "Sign Up || InventoShoot";
  }, []);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    // Proses signup di sini
  };

  const handleReset = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* AOS wrapper */}
      <div data-aos="zoom-in" data-aos-duration="800">
        <div className="w-[500px] max-w-md p-12 rounded-2xl shadow-xl bg-white/30 backdrop-blur-lg border border-white/30">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Sign Up
          </h2>
          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <label className="block text-slate-400 mb-2" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white/60 focus:outline-none"
                placeholder="Masukkan username"
                autoComplete="username"
                required
              />
            </div>
            <div>
              <label className="block text-slate-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white/60 focus:outline-none "
                placeholder="Masukkan email"
                autoComplete="email"
                required
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white/60 focus:outline-none pr-10"
                  placeholder="Masukkan password"
                  autoComplete="new-password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeIcon.EyeOpenIcon />
                  ) : (
                    <EyeIcon.EyeClosedIcon />
                  )}
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-600 transition-all hover:scale-105 cursor-pointer"
              >
                Sign Up
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 px-4 py-2 bg-white/70 border border-slate-300 rounded-lg text-slate-400 hover:shadow transition-all hover:scale-105 cursor-pointer"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
