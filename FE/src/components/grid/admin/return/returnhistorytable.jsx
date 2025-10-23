import React from "react";
import {sampleDataHistory} from "./js/sampledataReturn";

export default function ReturnHistoryTable() {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-xl max-w-5xl mx-auto border border-slate-200">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-slate-200 rounded-xl overflow-hidden shadow">
          <thead>
            <tr className="bg-green-50 text-green-700">
              <th className="border-b px-6 py-4 text-left font-semibold">
                ID Return
              </th>
              <th className="border-b px-6 py-4 text-left font-semibold">
                Nama User
              </th>
              <th className="border-b px-6 py-4 text-left font-semibold">
                Barang
              </th>
              <th className="border-b px-6 py-4 text-left font-semibold">
                Kode Barang
              </th>
              <th className="border-b px-6 py-4 text-left font-semibold">
                Jumlah
              </th>
              <th className="border-b px-6 py-4 text-left font-semibold">
                Kondisi Akhir
              </th>
              <th className="border-b px-6 py-4 text-left font-semibold">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {sampleDataHistory.map((item, idx) => (
              <tr
                key={item.id_return}
                className={idx % 2 === 0 ? "bg-white" : "bg-green-50"}
              >
                <td className="px-6 py-4 border-b">{item.id_return}</td>
                <td className="px-6 py-4 border-b">{item.nama_user}</td>
                <td className="px-6 py-4 border-b">{item.barang}</td>
                <td className="px-6 py-4 border-b">{item.kode_barang}</td>
                <td className="px-6 py-4 border-b">{item.jumlah}</td>
                <td className="px-6 py-4 border-b">{item.kondisi_akhir}</td>
                <td className="px-6 py-4 border-b">
                  <span
                    className={
                      "inline-block px-3 py-1 rounded-full text-xs font-bold " +
                      (item.status === "Selesai"
                        ? "bg-green-200 text-green-800"
                        : "bg-gray-200 text-gray-800")
                    }
                  >
                    {item.status}
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
