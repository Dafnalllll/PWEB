import React from "react";
import Sidebar from "../components/sidebar/sidebar";

export const Report = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      <main className="flex-1 p-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">Report</h1>
          <p className="text-lg mb-6 text-center">
            Ini adalah halaman report. Gunakan navigasi untuk pindah ke halaman
            lain.
          </p>
          {/* Tambahkan konten lain di sini */}
        </div>
      </main>
    </div>
  );
};

export default Report;
