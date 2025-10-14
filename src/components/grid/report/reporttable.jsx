import React from "react";

const statusColor = {
  green: "bg-green-100 text-green-700",
  blue: "bg-blue-100 text-blue-700",
  red: "bg-red-100 text-red-700",
};

export default function ReportTable({ data }) {
  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden mt-4">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-50">
            <th className="py-4 px-3 text-left font-bold text-slate-800">NO</th>
            <th className="py-4 px-3 text-left font-bold text-slate-800">
              NAMA BARANG
            </th>
            <th className="py-4 px-3 text-left font-bold text-slate-800">
              TGL PINJAM
            </th>
            <th className="py-4 px-3 text-left font-bold text-slate-800">
              TGL KEMBALI
            </th>
            <th className="py-4 px-3 text-left font-bold text-slate-800">
              STATUS
            </th>
            <th className="py-4 px-3 text-left font-bold text-slate-800">
              KETERANGAN
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.nomor}
              className="border-b last:border-b-0 border-slate-100"
            >
              <td className="py-3 px-3 text-slate-700">{item.nomor}</td>
              <td className="py-3 px-3 text-slate-700">{item.namaBarang}</td>
              <td className="py-3 px-3 text-slate-700">{item.tanggalMinjam}</td>
              <td className="py-3 px-3 text-slate-700">
                {item.tanggalKembali}
              </td>
              <td className="py-3 px-3">
                <span
                  className={`inline-block px-4 py-1 rounded-full font-semibold text-sm ${
                    statusColor[item.warnaStatus] ||
                    "bg-slate-100 text-slate-700"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="py-3 px-3 text-slate-700">{item.keterangan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
