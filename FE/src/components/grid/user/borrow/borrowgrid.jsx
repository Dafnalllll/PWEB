import React, { useState, useMemo } from "react";
import BorrowTable from "./borrowtable";
import { sampleBorrow } from "./js/sampledataBorrow";
import BorrowFormModal from "../form/borrowform"; // Pastikan untuk mengimpor komponen BorrowFormModal

export const BorrowCaption = () => (
  <div className="mb-[2rem] ">
    <h1 className="text-2xl font-semibold text-slate-900">Borrow</h1>
    <p className="text-sm text-slate-500 mt-1 ">
      Data barang dan status peminjaman.
    </p>
  </div>
);

export const BorrowFilter = ({ q, setQ }) => (
  <div className="flex items-center gap-2 w-full sm:w-auto mb-6">
    <input
      type="text"
      placeholder="Cari Barang / Kategori..."
      value={q}
      onChange={(e) => setQ(e.target.value)}
      className="border rounded-lg py-2 px-3 focus:outline-none bg-white/70"
    />
    <button
      onClick={() => setQ("")}
      className="px-4 py-2.5 bg-white/70 border rounded-lg text-sm text-slate-700 hover:shadow-sm transition-all hover:scale-105 cursor-pointer"
    >
      Reset
    </button>
  </div>
);

export const BorrowGrid = () => {
  const [q, setQ] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredBorrow = useMemo(() => {
    return sampleBorrow.filter(
      (item) =>
        item.barang.toLowerCase().includes(q.toLowerCase()) ||
        item.kategori.toLowerCase().includes(q.toLowerCase())
    );
  }, [q]);

  const handlePinjamClick = (item) => {
    setSelectedItem({
      ...item,
      name: item.barang,
      stock: item.stok,
    });
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // proses pengajuan pinjam
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Caption di kiri, filter di kanan */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <BorrowCaption />
        <BorrowFilter q={q} setQ={setQ} />
      </div>

      {/* Table */}
      <BorrowTable data={filteredBorrow} onPinjam={handlePinjamClick} />

      {/* Modal Form Peminjaman */}
      <BorrowFormModal
        isModalOpen={isModalOpen}
        selectedItem={selectedItem}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default BorrowGrid;
