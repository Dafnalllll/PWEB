import React from "react";
import {sampleDataHistory} from "./js/sampledataReturn";
import { HistoryIcon } from "../../../icon/sidebaricon";

export default function ReturnHistoryGrid() {
  const totalHistory = sampleDataHistory.length;
  const totalBarang = sampleDataHistory.reduce(
    (acc, item) => acc + item.jumlah,
    0
  );

  return (
    <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow max-w-sm mx-auto border border-slate-100">
      <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center">
        <HistoryIcon className="text-green-700" size={32} />
      </div>
      <div>
        <div className="text-lg text-slate-600 font-semibold mb-1">
          Overview History Pengembalian
        </div>
        <div className="text-3xl font-bold text-green-900">{totalHistory}</div>
        <div className="text-sm text-slate-500 mt-1">
          Total Barang: <span className="font-bold">{totalBarang}</span>
        </div>
      </div>
    </div>
  );
}
