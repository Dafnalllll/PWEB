import React from "react";

export default function ViewHistoryFormModal({ isOpen, item, onClose }) {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-[420px] border border-slate-200 animate-fadeIn">
        <h2 className="text-2xl font-bold mb-6 text-sky-700 flex items-center gap-2">
          <svg
            className="w-7 h-7 text-sky-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4M12 16h.01"
            />
          </svg>
          Detail Riwayat Peminjaman
        </h2>
        <div className="space-y-4">
          <div>
            <span className="text-sm text-slate-500">Nama Barang</span>
            <div className="font-semibold text-slate-900 mt-1">{item.name}</div>
          </div>
          <div>
            <span className="text-sm text-slate-500">Kode Barang</span>
            <div className="font-semibold text-slate-900 mt-1">{item.kode}</div>
          </div>
          <div>
            <span className="text-sm text-slate-500">Peminjam</span>
            <div className="font-semibold text-slate-900 mt-1">
              {item.borrower}
            </div>
          </div>
          <div>
            <span className="text-sm text-slate-500">Jumlah</span>
            <div className="font-semibold text-slate-900 mt-1">{item.qty}</div>
          </div>
          <div>
            <span className="text-sm text-slate-500">Kondisi</span>
            <div className="font-semibold text-slate-900 mt-1">
              {item.condition}
            </div>
          </div>
          <div>
            <span className="text-sm text-slate-500">Tanggal Pinjam</span>
            <div className="font-semibold text-slate-900 mt-1">
              {item.borrowedAt}
            </div>
          </div>
          <div>
            <span className="text-sm text-slate-500">Tanggal Kembali</span>
            <div className="font-semibold text-slate-900 mt-1">
              {item.returnedAt}
            </div>
          </div>
          {item.note && (
            <div>
              <span className="text-sm text-slate-500">Catatan</span>
              <div className="font-normal text-slate-700 mt-1">{item.note}</div>
            </div>
          )}
        </div>
        <div className="flex justify-end mt-8">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-sky-500 text-sky-700 bg-sky-100 hover:bg-sky-200 hover:border-sky-700 transition-all hover:scale-105 cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
