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
    <>
      <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Data User</h1>
          <p className="text-sm text-slate-500 mt-1">
            Kelola daftar user dan hak akses aplikasi Anda
          </p>
        </div>
        <div className="w-full sm:w-auto flex items-center gap-2 sm:gap-3">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cari nama / username / email / role..."
            className="w-full sm:w-96 px-3 py-2 border rounded-lg text-sm focus:outline-none bg-white/80"
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
      <ManageTable users={filteredUsers} />
    </>
  );
};

export default ManageGrid;
