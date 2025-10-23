import React from "react";
import {sampleDataList} from "./js/sampledataReturn";

export default function ReturnListTable() {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-xl max-w-5xl mx-auto border border-slate-200">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-slate-200 rounded-xl overflow-hidden shadow">
          <thead>
            <tr className="bg-yellow-50 text-yellow-700">
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
                Tanggal Kembali
              </th>
              <th className="border-b px-6 py-4 text-left font-semibold">
                Kondisi Awal
              </th>
              <th className="border-b px-6 py-4 text-left font-semibold">
                Kondisi Saat Ini
              </th>
            </tr>
          </thead>
          <tbody>
            {sampleDataList.map((item, idx) => (
              <tr
                key={item.id_return}
                className={idx % 2 === 0 ? "bg-white" : "bg-yellow-50"}
              >
                <td className="px-6 py-4 border-b">{item.id_return}</td>
                <td className="px-6 py-4 border-b">{item.nama_user}</td>
                <td className="px-6 py-4 border-b">{item.barang}</td>
                <td className="px-6 py-4 border-b">{item.kode_barang}</td>
                <td className="px-6 py-4 border-b">{item.jumlah}</td>
                <td className="px-6 py-4 border-b">{item.tanggal_kembali}</td>
                <td className="px-6 py-4 border-b">{item.kondisi_awal}</td>
                <td className="px-6 py-4 border-b">{item.kondisi_saat_ini}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

