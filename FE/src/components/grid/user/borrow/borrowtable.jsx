import React from "react";

const statusColor = {
  green: "bg-green-100 text-green-700",
  blue: "bg-blue-100 text-blue-700",
  red: "bg-red-100 text-red-700",
};

const BorrowTable = ({ data, onPinjam }) => {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden ml-[2rem] mt-[2rem]">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-100">
            <th className="py-4 px-3 text-left font-bold text-slate-800">NO</th>
            <th className="py-4 px-3 text-left font-bold text-slate-800">
              BARANG
            </th>
            <th className="py-4 px-3 text-left font-bold text-slate-800">
              KATEGORI
            </th>
            <th className="py-4 px-3 text-left font-bold text-slate-800">
              KONDISI
            </th>
            <th className="py-4 px-3 text-left font-bold text-slate-800">
              STATUS
            </th>
            <th className="py-4 px-3 text-left font-bold text-slate-800">
              STOK
            </th>
            <th className="py-4 px-3 text-left font-bold text-slate-800">
              AKSI
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.nomor}
              className="bg-white hover:bg-slate-50 transition border-b last:border-b-0 border-slate-100"
            >
              <td className="py-3 px-3 text-slate-700">{item.nomor}</td>
              <td className="py-3 px-3 text-slate-700">{item.barang}</td>
              <td className="py-3 px-3 text-slate-700">{item.kategori}</td>
              <td className="py-3 px-3 text-slate-700">{item.kondisi}</td>
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
              <td className="py-3 px-3 text-slate-700 ">{item.stok}</td>
              <td className="py-3 px-3 text-start">
                {item.stok > 0 ? (
                  <button
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm hover:shadow-md transition-all hover:scale-105 cursor-pointer"
                    onClick={() => onPinjam(item)}
                  >
                    Pinjam
                  </button>
                ) : (
                  <span className="text-slate-400 text-lg">-</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowTable;
