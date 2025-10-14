import React, { useState, useMemo } from "react";
import { sampleUsers } from "./js/sampledataManage";
import ManageTable from "./managetable";

const ManageGrid = () => {
  const [q, setQ] = useState("");

  const filteredUsers = useMemo(() => {
    const term = (q || "").trim().toLowerCase();
    if (!term) return sampleUsers;
    return sampleUsers.filter(
      (user) =>
        user.nama.toLowerCase().includes(term) ||
        user.username.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term) ||
        user.role.toLowerCase().includes(term)
    );
  }, [q]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header + Filter in one row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Data User</h1>
          <p className="text-sm text-slate-500 mt-1">
            Kelola daftar user dan hak akses aplikasi Anda
          </p>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cari nama / username / email / role..."
            className="w-full md:w-96 px-3 py-2 border rounded-lg text-sm focus:outline-none bg-white/80"
            aria-label="Cari user"
          />
          <button
            onClick={() => setQ("")}
            className="px-3 py-2 bg-white/70 border rounded-lg text-sm text-slate-700 hover:shadow-sm transition cursor-pointer"
            title="Reset"
          >
            Reset
          </button>
        </div>
      </div>
      {/* Table */}
      <ManageTable users={filteredUsers} />
    </div>
  );
};

export default ManageGrid;
