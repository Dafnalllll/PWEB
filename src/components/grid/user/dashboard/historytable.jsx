import React from "react";
import TableHeader from "./TableHeader";
import { formatDate } from "./js/utils";
import { DetailIcon } from "../../../icon/dashboardicon";

export default function HistoryTable({ items = [], onView }) {
  return (
    <div className="bg-white backdrop-blur-sm border border-slate-100 rounded-2xl p-4 shadow-lg">
      <TableHeader
        title="Riwayat Peminjaman"
        subtitle={`Total: ${items.length}`}
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
                Dikembalikan
              </th>
              <th className="px-4 py-3 uppercase tracking-wider">Kondisi</th>
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
                  {formatDate(it.returnedAt)}
                </td>

                <td className="px-4 py-4 align-top w-36">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                    {it.condition}
                  </span>
                </td>

                <td className="px-4 py-4 align-top w-28">
                  <button
                    onClick={() => onView?.(it)}
                    className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-white border border-slate-100 text-slate-700 hover:shadow-sm transition-all hover:scale-105 cursor-pointer"
                    title="Lihat"
                  >
                    <DetailIcon />
                    <span className="hidden sm:inline text-xs">Lihat</span>
                  </button>
                </td>
              </tr>
            ))}

            {items.length === 0 && (
              <tr>
                <td
                  colSpan="9"
                  className="px-6 py-12 text-center text-slate-500"
                >
                  <div className="mx-auto max-w-xs">
                    <div className="mb-3 flex items-center justify-center w-12 h-12 rounded-lg bg-slate-100 text-slate-500">
                      <svg
                        className="w-6 h-6"
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
                      </svg>
                    </div>
                    <div className="text-sm font-medium">
                      Belum ada riwayat peminjaman
                    </div>
                    <div className="text-xs text-slate-400 mt-2">
                      Riwayat akan muncul setelah ada pengembalian.
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
