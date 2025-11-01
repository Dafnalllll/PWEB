import React from "react";

export default function ReturnFormModal({
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
              d="M19 12H5M12 19V5"
            />
          </svg>
          Form Pengembalian
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
          <div>
            <label className="text-sm font-semibold mb-2 block text-slate-700">
              Tanggal Kembali
            </label>
            <input
              type="date"
              name="returnDate"
              className="w-full py-2 px-3 rounded-lg bg-gray-100/70  border-1 border-gray-100 focus:ring-0 transition text-slate-900"
              required
            />
          </div>
          <div>
            <label className="text-sm font-semibold mb-2 block text-slate-700">
              Jumlah Dikembalikan
            </label>
            <input
              type="number"
              name="quantity"
              min="1"
              max={selectedItem?.borrowed || 1}
              className="w-full py-2 px-3 rounded-lg bg-gray-100/70  border-1 border-gray-100 focus:ring-0 transition text-slate-900"
              required
            />
            <span className="text-xs text-slate-400 mt-1 block">
              Jumlah dipinjam: {selectedItem?.borrowed || 0}
            </span>
          </div>
          <div>
            <label className="text-sm font-semibold mb-2 block text-slate-700">
              Kondisi Saat Ini
            </label>
            <select
              name="condition"
              className="w-full py-2 px-3 rounded-lg bg-gray-100/70  border-1 border-gray-100 focus:ring-0 transition text-slate-900"
              required
            >
              <option value="">Pilih kondisi</option>
              <option value="Baik">Baik</option>
              <option value="Rusak">Rusak</option>
              <option value="Layar Retak">Layar Retak</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold mb-2 block text-slate-700">
              Catatan Pengembalian
            </label>
            <textarea
              name="note"
              className="w-full py-2 px-3 rounded-lg bg-gray-100/70  border-1 border-gray-100 focus:ring-0 transition text-slate-900"
              placeholder="Catatan jika ada kerusakan atau info lain"
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
              Kembalikan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
