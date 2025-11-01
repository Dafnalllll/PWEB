import React from "react";
import TableHeader from "./TableHeader";
import { formatDate } from "./js/utils";
import { DetailIcon } from "../../../icon/dashboardicon";

function statusClass(status) {
  switch ((status || "").toLowerCase()) {
    case "dipinjam":
      return "bg-yellow-100 text-yellow-800";
    case "terlambat":
      return "bg-red-100 text-red-700";
    case "selesai":
      return "bg-emerald-100 text-emerald-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
}

export default function BorrowedTable({ items = [], onDetail }) {
  const handleAdd = () => {};

  return (
    <div className="bg-white backdrop-blur-sm border border-slate-100 rounded-2xl p-4 shadow-lg">
      <TableHeader
        title="Borrow"
        subtitle="Data barang yang dipinjam"
        showAdd={true}
        showExport={false}
        onAdd={handleAdd}
      />

      <div className="overflow-x-auto">
        <table className="min-w-full table-fixed text-sm">
          <thead className="sticky top-0 bg-white/60 backdrop-blur-sm z-10">
            <tr className="text-left text-slate-500">
              <th className="px-4 py-3 uppercase tracking-wider">#</th>
              <th className="px-4 py-3 uppercase tracking-wider">
                Nama Barang
              </th>
              <th className="px-4 py-3 uppercase tracking-wider">Kode</th>
              <th className="px-4 py-3 uppercase tracking-wider">Peminjam</th>
              <th className="px-4 py-3 uppercase tracking-wider">Qty</th>
              <th className="px-4 py-3 uppercase tracking-wider">Dipinjam</th>
              <th className="px-4 py-3 uppercase tracking-wider">
                Jatuh Tempo
              </th>
              <th className="px-4 py-3 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 uppercase tracking-wider">Aksi</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {items.map((it, idx) => (
              <tr key={it.id} className="bg-white hover:bg-slate-50 transition">
                <td className="px-4 py-4 align-top text-slate-600 w-12">
                  {idx + 1}
                </td>

                <td className="px-4 py-4 align-top">
                  <div className="font-medium text-slate-800 line-clamp-1">
                    {it.name}
                  </div>
                  {it.note && (
                    <div className="text-xs text-slate-400 mt-1">{it.note}</div>
                  )}
                </td>

                <td className="px-4 py-4 text-slate-600 align-top w-28">
                  {it.kode}
                </td>
                <td className="px-4 py-4 text-slate-600 align-top w-36">
                  {it.borrower}
                </td>
                <td className="px-4 py-4 text-slate-600 align-top w-16">
                  {it.qty}
                </td>

                <td className="px-4 py-4 text-slate-600 align-top w-36">
                  {formatDate(it.borrowedAt)}
                </td>
                <td className="px-4 py-4 text-slate-600 align-top w-36">
                  {formatDate(it.dueAt)}
                </td>

                <td className="px-4 py-4 align-top w-36">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusClass(
                      it.status
                    )}`}
                  >
                    {it.status}
                  </span>
                </td>

                <td className="px-4 py-4 align-top w-36">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onDetail?.(it)}
                      aria-label={`Detail ${it.name}`}
                      className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-white border border-slate-100 text-slate-700 hover:shadow-sm transition-all hover:scale-105 cursor-pointer"
                      title="Detail"
                    >
                      <DetailIcon />
                      <span className="hidden sm:inline text-xs">Detail</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {items.length === 0 && (
              <tr>
                <td
                  colSpan="9"
                  className="px-6 py-12 text-center text-slate-500"
                >
                  <div className="mx-auto max-w-xs flex flex-col items-center">
                    <div className="mb-3 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-sky-100 to-slate-100 shadow-lg">
                      <svg
                        className="w-8 h-8 text-sky-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 7h18"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M8 7v10a2 2 0 002 2h4a2 2 0 002-2V7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M12 11v6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="1"
                          opacity="0.1"
                        />
                      </svg>
                    </div>
                    <div className="text-base font-semibold text-slate-700">
                      Tidak ada barang ditemukan
                    </div>
                    <div className="text-xs text-slate-400 mt-2">
                      Riwayat akan muncul setelah ada pengembalian barang.
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
