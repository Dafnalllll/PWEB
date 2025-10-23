import React from "react";
import { sampleDataList } from "./js/sampledataBorrow";
import { TotalIcon } from "../../../icon/dashboardicon";

export default function BorrowListGrid() {
  const totalList = sampleDataList.length;
  const totalBarang = sampleDataList.reduce(
    (acc, item) => acc + item.jumlah,
    0
  );

  return (
    <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow max-w-sm mx-auto border border-slate-100">
      <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center">
        <TotalIcon className="text-purple-700" size={32} />
      </div>
      <div>
        <div className="text-lg text-slate-600 font-semibold mb-1">
          List Peminjaman
        </div>
        <div className="text-3xl font-bold text-purple-900">{totalList}</div>
        <div className="text-sm text-slate-500 mt-1">
          Total Barang Dipinjam:{" "}
          <span className="font-bold">{totalBarang}</span>
        </div>
      </div>
    </div>
  );
}
