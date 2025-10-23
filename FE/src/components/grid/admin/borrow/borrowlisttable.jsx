import React from "react";
import { sampleDataList } from "./js/sampledataBorrow";

export default function BorrowListTable() {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-xl max-w-5xl mx-auto border border-slate-200">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-slate-200 rounded-xl overflow-hidden shadow">
          <thead>
            <tr className="bg-purple-50 text-purple-700">
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
            </tr>
          </thead>
          <tbody>
            {sampleDataList.map((item, idx) => (
              <tr
                key={item.id_peminjaman}
                className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}
              >
                <td className="px-6 py-4 border-b">{item.id_peminjaman}</td>
                <td className="px-6 py-4 border-b">{item.nama_user}</td>
                <td className="px-6 py-4 border-b">{item.barang}</td>
                <td className="px-6 py-4 border-b">{item.jumlah}</td>
                <td className="px-6 py-4 border-b">{item.tanggal_pinjam}</td>
                <td className="px-6 py-4 border-b">{item.tanggal_kembali}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
