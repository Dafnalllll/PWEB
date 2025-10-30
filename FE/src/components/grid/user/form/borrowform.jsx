import React from "react";

export default function BorrowFormModal({
  isModalOpen,

  selectedItem,
  handleSubmit,
  handleCancel,
}) {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/30 backdrop-blur-sm">
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-[420px] border border-slate-200 animate-fadeIn">
        <h2 className="text-2xl font-bold mb-6 text-sky-700 flex items-center gap-2">
          <svg
            className="w-7 h-7 text-sky-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5v14M5 12h14"
            />
          </svg>
          Form Peminjaman
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-semibold mb-2 block text-slate-700">
              Nama Barang
            </label>
            <input
              type="text"
              value={selectedItem?.name || ""}
              readOnly
              className="w-full py-2 px-3 font-medium bg-gray-100/70 rounded-lg border-1 border-gray-100 focus:ring-0 transition text-slate-900"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm font-semibold mb-2 block text-slate-700">
                Tanggal Pinjam
              </label>
              <input
                type="date"
                name="borrowDate"
                className="w-full py-2 px-3 rounded-lg bg-gray-100/70 border-1 border-gray-100 focus:ring-0 transition text-slate-900"
                required
              />
            </div>
            <div className="flex-1">
              <label className="text-sm font-semibold mb-2 block text-slate-700">
                Tanggal Kembali
              </label>
              <input
                type="date"
                name="returnDate"
                className="w-full py-2 px-3 rounded-lg bg-gray-100/70 border-1 border-gray-100 focus:ring-0 transition text-slate-900"
                required
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold mb-2 block text-slate-700">
              Jumlah
            </label>
            <input
              type="number"
              name="quantity"
              min="1"
              max={selectedItem?.stock || 1}
              className="w-full py-2 px-3 rounded-lg bg-gray-100/70 border-1 border-gray-100 focus:ring-0 transition text-slate-900"
              required
            />
            <span className="text-xs text-slate-400 mt-1 block">
              Stok tersedia: {selectedItem?.stock || 0}
            </span>
          </div>
          <div>
            <label className="text-sm font-semibold mb-2 block text-slate-700">
              Tujuan Peminjaman
            </label>
            <textarea
              name="purpose"
              className="w-full py-2 px-3 rounded-lg bg-gray-100/70 border-1 border-gray-100 focus:ring-0 transition text-slate-900"
              placeholder="Misal: Dokumentasi acara kampus"
              required
            ></textarea>
          </div>
          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={handleCancel}
              className="btn btn-ghost px-4 py-2 rounded-lg border border-red-400 text-red-500 hover:bg-red-50 hover:border-red-500 transition-all cursor-pointer hover:scale-105"
            >
              Batal
            </button>
            <button
              type="submit"
              className="btn btn-primary px-4 py-2 rounded-lg border border-sky-500 text-sky-700 bg-sky-100 hover:bg-sky-200 hover:border-sky-700 transition-all cursor-pointer hover:scale-105"
            >
              Ajukan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
