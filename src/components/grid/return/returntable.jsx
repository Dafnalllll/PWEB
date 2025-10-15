import React from "react";

const ReturnTable = ({ data }) => {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden mt-[2rem] ml-[5rem]">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-50">
            <th className="py-4 px-3 text-left font-bold text-slate-800">No</th>
            <th className="py-4 px-3 text-left font-bold text-slate-800">
              Nama Barang
            </th>
            <th className="py-4 px-3 text-left font-bold text-slate-800">
              Tanggal Pinjam
            </th>
            <th className="py-4 px-3 text-left font-bold text-slate-800">
              Tanggal Kembali
            </th>
            <th className="py-4 px-3 text-left font-bold text-slate-800">
              Kondisi 
            </th>
            <th className="py-4 px-3 text-left font-bold text-slate-800">
              Aksi
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
              <td className="py-3 px-3 text-slate-700">{item.tanggalMinjam}</td>
              <td className="py-3 px-3 text-slate-700">{item.tanggalKembali}</td>
              <td className="py-3 px-3 text-slate-700">{item.kondisi}</td>
              <td className="py-3 px-3">
                <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
                  Kembalikan
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReturnTable;
