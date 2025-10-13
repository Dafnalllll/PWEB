import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">Selamat datang</h1>
      <p className="text-lg mb-6 text-center">
        Ini adalah halaman beranda. Gunakan navigasi untuk pindah ke halaman
        lain.
      </p>
      <div className="flex gap-3">
        <Link to="/about" className="px-4 py-2 bg-blue-600 text-white rounded">
          About
        </Link>
        <Link to="/non-existent" className="px-4 py-2 bg-gray-200 rounded">
          Coba 404
        </Link>
      </div>
    </div>
  );
}
