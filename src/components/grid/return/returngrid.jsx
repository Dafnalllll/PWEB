import React, { useState, useMemo } from "react";
import { sampleReturn } from "./js/sampledataReturn";
import ReturnTable from "./returntable";

const ReturnCaption = () => (
  <div className="mt-14 ml-[4rem]">
    <h1 className="text-2xl font-semibold text-slate-900">Return</h1>
    <p className="text-sm text-slate-500 mt-1">
      Daftar barang yang telah dikembalikan
    </p>
  </div>
);

const ReturnFilter = ({ q, setQ }) => (
  <div className="flex items-center gap-2 w-full md:w-auto ml-[20rem] mt-[3rem]">
    <input
      value={q}
      onChange={(e) => setQ(e.target.value)}
      placeholder="Cari nama / kondisi..."
      className="w-full md:w-96 px-3 py-2 border rounded-lg text-sm focus:outline-none bg-white/70"
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

const ReturnGrid = () => {
  const [q, setQ] = useState("");
  const filteredReturn = useMemo(() => {
    return sampleReturn.filter(
      (item) =>
        item.barang?.toLowerCase().includes(q.toLowerCase()) ||
        item.kondisi?.toLowerCase().includes(q.toLowerCase())
    );
  }, [q]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Caption di kiri, filter di kanan */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <ReturnCaption />
        <div className="w-full md:w-auto flex justify-end">
          <ReturnFilter q={q} setQ={setQ} />
        </div>
      </div>
      {/* Table */}
      <ReturnTable data={filteredReturn} />
    </div>
  );
};

export default ReturnGrid;
