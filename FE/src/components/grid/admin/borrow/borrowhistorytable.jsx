import React from "react";
import { sampleDataHistory } from "./js/sampledataBorrow";

export default function BorrowHistoryTable() {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-xl max-w-5xl mx-auto border border-slate-200">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-slate-200 rounded-xl overflow-hidden shadow">
          <thead>
            <tr className="bg-green-50 text-green-700">
              <th className="border-b px-6 py-4 text-left font-semibold">
                ID Peminjaman
              </th>
              <th className="border-b px-6 py-4 text-left font-semibold">
                Nama User
              </th>
              <th className="border-b px-6 py-4 text-left font-semibold">
                Barang
              </th>
              <th className="border-b px-6 py-4 text-left font-semibold">
                Jumlah
              </th>
              <th className="border-b px-6 py-4 text-left font-semibold">
                Tanggal Pinjam
              </th>
              <th className="border-b px-6 py-4 text-left font-semibold">
                Tanggal Kembali
              </th>
              <th className="border-b px-6 py-4 text-left font-semibold">
                Kondisi
              </th>
              <th className="border-b px-6 py-4 text-left font-semibold">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {sampleDataHistory.map((history, idx) => (
              <tr
                key={history.id_peminjaman}
                className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}
              >
                <td className="px-6 py-4 border-b">{history.id_peminjaman}</td>
                <td className="px-6 py-4 border-b">{history.nama_user}</td>
                <td className="px-6 py-4 border-b">{history.barang}</td>
                <td className="px-6 py-4 border-b">{history.jumlah}</td>
                <td className="px-6 py-4 border-b">{history.tanggal_pinjam}</td>
                <td className="px-6 py-4 border-b">
                  {history.tanggal_kembali}
                </td>
                <td className="px-6 py-4 border-b">
                  <span
                    className={
                      "inline-block px-3 py-1 rounded-full text-xs font-bold " +
                      (history.kondisi_barang === "Baik"
                        ? "bg-green-100 text-green-700"
                        : history.kondisi_barang === "Cukup"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700")
                    }
                  >
                    {history.kondisi_barang}
                  </span>
                </td>
                <td className="px-6 py-4 border-b">
                  <span
                    className={
                      "inline-block px-3 py-1 rounded-full text-xs font-bold " +
                      (history.status === "Selesai"
                        ? "bg-green-200 text-green-800"
                        : "bg-gray-200 text-gray-800")
                    }
                  >
                    {history.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
