import React from "react";
import sampleDataBarang from "./js/sampledataDataAdmin";

export default function DataAddTable() {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-xl max-w-6xl mx-auto border border-slate-200">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-slate-200 rounded-xl overflow-hidden shadow">
          <thead>
            <tr className="bg-blue-50 text-blue-700">
              <th className="border-b px-6 py-4 text-left font-semibold">
                Kode
              </th>
              <th className="border-b px-6 py-4 text-left font-semibold">
                Nama Barang
              </th>
              <th className="border-b px-6 py-4 text-left font-semibold">
                Kategori
              </th>
              <th className="border-b px-6 py-4 text-left font-semibold">
                Jumlah
              </th>
              <th className="border-b px-6 py-4 text-left font-semibold">
                Kondisi
              </th>
              <th className="border-b px-6 py-4 text-left font-semibold">
                Foto
              </th>
            </tr>
          </thead>
          <tbody>
            {sampleDataBarang.map((barang, idx) => (
              <tr
                key={barang.kode}
                className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}
              >
                <td className="px-6 py-4 border-b">{barang.kode}</td>
                <td className="px-6 py-4 border-b">{barang.nama}</td>
                <td className="px-6 py-4 border-b">{barang.kategori}</td>
                <td className="px-6 py-4 border-b">{barang.jumlah}</td>
                <td className="px-6 py-4 border-b">
                  <span
                    className={
                      "inline-block px-3 py-1 rounded-full text-xs font-bold " +
                      (barang.kondisi === "Baik"
                        ? "bg-green-100 text-green-700"
                        : barang.kondisi === "Cukup"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700")
                    }
                  >
                    {barang.kondisi}
                  </span>
                </td>
                <td className="px-6 py-4 border-b">
                  <img
                    src={`/images/${barang.foto}`}
                    alt={barang.nama}
                    className="w-20 h-16 object-cover rounded-lg border"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
