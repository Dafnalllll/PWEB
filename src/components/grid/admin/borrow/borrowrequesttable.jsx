import React from "react";
import { sampleDataRequest } from "./js/sampledataBorrow";

export default function BorrowRequestTable() {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-xl max-w-5xl mx-auto border border-slate-200">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-slate-200 rounded-xl overflow-hidden shadow">
          <thead>
            <tr className="bg-blue-50 text-blue-700">
              <th className="border-b px-6 py-4 text-left font-semibold">
                ID Request
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
                Tanggal Pengajuan
              </th>
            </tr>
          </thead>
          <tbody>
            {sampleDataRequest.map((req, idx) => (
              <tr
                key={req.id_request}
                className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}
              >
                <td className="px-6 py-4 border-b">{req.id_request}</td>
                <td className="px-6 py-4 border-b">{req.nama_user}</td>
                <td className="px-6 py-4 border-b">{req.barang}</td>
                <td className="px-6 py-4 border-b">{req.jumlah}</td>
                <td className="px-6 py-4 border-b">{req.tanggal_pengajuan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
