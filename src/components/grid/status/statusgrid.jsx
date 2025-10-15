import React, { useState, useMemo } from "react";
import { sampleStatus } from "./js/sampledataStatus";
import StatusTable from "./statustable";

// Komponen Caption/Header
const StatusCaption = () => (
  <div className="mt-8 mr-4">
    <h2 className="text-2xl font-semibold text-slate-900">Status Peminjaman</h2>
    <p className="text-sm text-slate-500 mt-1">
      Daftar status dan tempo peminjaman barang.
    </p>
  </div>
);

// Komponen Filter
const StatusFilter = ({ q, setQ }) => (
  <div className="flex items-center gap-2 w-full sm:w-auto ml-[25rem] mt-4">
    <input
      value={q}
      onChange={(e) => setQ(e.target.value)}
      placeholder="Cari nama / status / keterangan..."
      className="w-full sm:w-72 px-3 py-2 border rounded-lg text-sm  focus:outline-none bg-white/70"
    />
    <button
      onClick={() => setQ("")}
      className="px-4 py-2 bg-white/70 border rounded-lg text-sm text-slate-700 hover:shadow-sm transition-all hover:scale-105 cursor-pointer"
      title="Reset"
    >
      Reset
    </button>
  </div>
);

export const StatusGrid = () => {
  const [q, setQ] = useState("");
  const filteredStatus = useMemo(() => {
    return sampleStatus.filter(
      (item) =>
        item.namaBarang.toLowerCase().includes(q.toLowerCase()) ||
        item.status.toLowerCase().includes(q.toLowerCase()) ||
        item.keterangan.toLowerCase().includes(q.toLowerCase())
    );
  }, [q]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Caption di kiri, filter di kanan */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <StatusCaption />
        <StatusFilter q={q} setQ={setQ} />
      </div>
      {/* Table */}
      <StatusTable data={filteredStatus} />
    </div>
  );
};

export default StatusGrid;
