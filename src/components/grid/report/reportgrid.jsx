import React, { useState, useMemo } from "react";
import { sampleReports } from "./js/sampledataReport";
import ReportTable from "./reporttable";

// Komponen Caption/Header
export const ReportCaption = () => (
  <div className="mt-8 ml-8">
    <h1 className="text-2xl font-semibold text-slate-900">Report</h1>
    <p className="text-sm text-slate-500 mt-1">
      Riwayat peminjaman dan status 
    </p>
  </div>
);

// Komponen Filter
export const ReportFilter = ({ q, setQ }) => (
  <div className="flex items-center gap-2 w-full sm:w-auto ml-[30rem] mt-4">
    <input
      value={q}
      onChange={(e) => setQ(e.target.value)}
      placeholder="Cari nama barang / status / keterangan..."
      className="w-full sm:w-72 px-3 py-2 border rounded-lg text-sm  focus:outline-none bg-white/70"
      aria-label="Cari laporan"
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

export const ReportGrid = () => {
  const [q, setQ] = useState("");

  const filteredReports = useMemo(() => {
    const term = (q || "").trim().toLowerCase();
    if (!term) return sampleReports;
    return sampleReports.filter(
      (report) =>
        report.namaBarang.toLowerCase().includes(term) ||
        report.status.toLowerCase().includes(term) ||
        report.keterangan.toLowerCase().includes(term)
    );
  }, [q]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Caption di kiri, filter di kanan */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <ReportCaption />
        <ReportFilter q={q} setQ={setQ} />
      </div>
      {/* Table */}
      <ReportTable data={filteredReports} />
    </div>
  );
};

export default ReportGrid;
