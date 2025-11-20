import React, { useMemo, useState } from "react";
import BorrowedTable from "../dashboard/borrowtable";
import BorrowGraph from "../dashboard/borrowgraph";
import HistoryGraph from "../dashboard/historygraph";
import HistoryTable from "../dashboard/historytable";
import DetailFormModal from "../form/detailform";
import ViewHistoryFormModal from "../form/viewhistoryform";
import { sampleBorrowed, sampleHistory } from "./js/sampledata";

export default function DashboardGrid({
  borrowed = sampleBorrowed,
  history = sampleHistory,
}) {
  const [q, setQ] = useState("");
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [selectedHistory, setSelectedHistory] = useState(null);

  const filteredBorrowed = useMemo(
    () =>
      borrowed.filter(
        (b) =>
          b.name.toLowerCase().includes(q.toLowerCase()) ||
          b.kode?.toLowerCase().includes(q.toLowerCase()) ||
          b.borrower?.toLowerCase().includes(q.toLowerCase())
      ),
    [borrowed, q]
  );
  const filteredHistory = useMemo(
    () =>
      history.filter(
        (h) =>
          h.name.toLowerCase().includes(q.toLowerCase()) ||
          h.kode?.toLowerCase().includes(q.toLowerCase()) ||
          h.borrower?.toLowerCase().includes(q.toLowerCase())
      ),
    [history, q]
  );

  // handlers
  const handleDetail = (item) => {
    setSelectedItem(item);
    setIsDetailOpen(true);
  };
  const handleReturn = (item) => console.log("return", item);
  const handleView = (item) => {
    setSelectedHistory(item);
    setIsHistoryOpen(true);
  };
  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setSelectedItem(null);
  };
  const handleCloseHistory = () => {
    setIsHistoryOpen(false);
    setSelectedHistory(null);
  };

  return (
    <div className="p-6 lg:p-10">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white/40 backdrop-blur-sm border border-white/30 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Overview Peminjaman
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Ringkasan peminjaman barang dan riwayatnya
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-2 flex-1 sm:flex-none">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Cari nama / kode / peminjam..."
                className="w-full sm:w-72 px-3 py-2 border rounded-lg text-sm  focus:outline-none bg-white/70"
              />
              <button
                onClick={() => setQ("")}
                className="hidden sm:inline-flex px-3 py-2 bg-white/70 border rounded-lg text-sm text-slate-700 hover:shadow-sm transition cursor-pointer hover:scale-105"
                title="Reset"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Small stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white/40 backdrop-blur-sm border border-white/30 rounded-lg p-3">
            <div className="text-xs text-slate-500">Total Dipinjam</div>
            <div className="text-lg font-semibold text-slate-900">
              {filteredBorrowed.length}
            </div>
          </div>
          <div className="bg-white/40 backdrop-blur-sm border border-white/30 rounded-lg p-3">
            <div className="text-xs text-slate-500">Total Riwayat</div>
            <div className="text-lg font-semibold text-slate-900">
              {filteredHistory.length}
            </div>
          </div>
          <div className="bg-white/40 backdrop-blur-sm border border-white/30 rounded-lg p-3">
            <div className="text-xs text-slate-500">
              Peminjaman Aktif / Hari Ini
            </div>
            <div className="text-lg font-semibold text-slate-900">
              {borrowed.filter((b) => new Date(b.dueAt) >= new Date()).length}
            </div>
          </div>
        </div>

        {/* Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <BorrowedTable
            items={filteredBorrowed}
            onDetail={handleDetail}
            onReturn={handleReturn}
          />
          <HistoryTable items={filteredHistory} onView={handleView} />
        </div>

        {/* Grafik: 1 baris, 2 kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <BorrowGraph />
          <HistoryGraph />
        </div>

        {/* Modal detail */}
        <DetailFormModal
          isOpen={isDetailOpen}
          item={selectedItem}
          onClose={handleCloseDetail}
        />
        {/* Modal view history */}
        <ViewHistoryFormModal
          isOpen={isHistoryOpen}
          item={selectedHistory}
          onClose={handleCloseHistory}
        />
      </div>
    </div>
  );
}
