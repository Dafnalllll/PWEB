import React from 'react'
import Sidebar from '../components/sidebar/sidebar'
export const Manage = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Manage Page</h1>
        <p className="mt-4">
          Ini adalah halaman manajemen. Gunakan navigasi untuk pindah ke halaman
          lain.
        </p>
        {/* Tambahkan konten lain di sini */}
      </div>
    </div>
  );
};

export default Manage;
