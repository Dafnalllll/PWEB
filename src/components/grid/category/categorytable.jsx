import React from "react";

const CategoryTable = ({ categories }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-2xl shadow-xl border border-slate-100">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-extrabold text-slate-700 uppercase tracking-wider">
              No
            </th>
            <th className="px-6 py-4 text-left text-xs font-extrabold text-slate-700 uppercase tracking-wider">
              Kode
            </th>
            <th className="px-6 py-4 text-left text-xs font-extrabold text-slate-700 uppercase tracking-wider">
              Nama Kategori
            </th>
            <th className="px-6 py-4 text-left text-xs font-extrabold text-slate-700 uppercase tracking-wider">
              Stok
            </th>
          </tr>
        </thead>
        <tbody>
          {categories && categories.length > 0 ? (
            categories.map((cat, idx) => (
              <tr
                key={cat.kode || idx}
                className="hover:bg-blue-50 transition-colors"
              >
                <td className="px-6 py-4 text-sm text-slate-700 font-semibold">
                  {idx + 1}
                </td>
                <td className="px-6 py-4 text-sm font-bold ">{cat.kode}</td>
                <td className="px-6 py-4 text-sm font-medium rounded-lg text-slate-800">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: cat.color,
                      color: "#fff",
                    }}
                  >
                    {cat.name}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-slate-700">
                  {cat.stok}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={4}
                className="px-6 py-10 text-center text-slate-400 text-base italic"
              >
                Tidak ada kategori ditemukan.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
