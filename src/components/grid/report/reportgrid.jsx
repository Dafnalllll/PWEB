import React, { useState, useMemo } from "react";
import { sampleReports } from "./js/sampledataReport";
import ReportTable from "./reporttable";

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
      {/* Header + Filter in one row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-[5rem] gap-4">
        <div>
          <h1 className="text-2xl  font-semibold text-slate-900">
            Laporan Peminjaman Barang
          </h1>
          <p className="text-sm text-slate-500 mb-4">
            Data peminjaman dan status barang
          </p>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto md:ml-[20rem]">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cari nama barang / status / keterangan..."
            className="w-full md:w-96 px-3 py-2 border rounded-lg text-sm focus:outline-none bg-white/80"
            aria-label="Cari laporan"
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
      <ReportTable data={filteredReports} />
    </div>
  );
};

export default ReportGrid;
