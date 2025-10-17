import React from "react";
import {sampleDataList} from "./js/sampledataReturn";
import { TotalIcon } from "../../../icon/dashboardicon";

export default function ReturnListGrid() {
  const totalReturn = sampleDataList.length;
  const totalBarang = sampleDataList.reduce(
    (acc, item) => acc + item.jumlah,
    0
  );

  return (
    <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow max-w-sm mx-auto border border-slate-100">
      <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center">
        <TotalIcon className="text-yellow-700" size={32} />
      </div>
      <div>
        <div className="text-lg text-slate-600 font-semibold mb-1">
          Overview Pengembalian Barang
        </div>
        <div className="text-3xl font-bold text-yellow-900">{totalReturn}</div>
        <div className="text-sm text-slate-500 mt-1">
          Total Barang Dikembalikan:{" "}
          <span className="font-bold">{totalBarang}</span>
        </div>
      </div>
    </div>
  );
}
