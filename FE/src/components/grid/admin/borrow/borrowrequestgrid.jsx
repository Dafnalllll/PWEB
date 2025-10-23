import React from "react";
import { sampleDataRequest } from "./js/sampledataBorrow";
import { RequestIcon } from "../../../icon/sidebaricon";

export default function BorrowRequestGrid() {
  const totalRequest = sampleDataRequest.length;
  const totalBarang = sampleDataRequest.reduce(
    (acc, item) => acc + item.jumlah,
    0
  );

  return (
    <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow max-w-sm mx-auto border border-slate-100">
      <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
        <RequestIcon className="text-blue-700" size={32} />
      </div>
      <div>
        <div className="text-lg text-slate-600 font-semibold mb-1">
          Request Peminjaman
        </div>
        <div className="text-3xl font-bold text-blue-900">{totalRequest}</div>
        <div className="text-sm text-slate-500 mt-1">
          Total Barang Diminta: <span className="font-bold">{totalBarang}</span>
        </div>
      </div>
    </div>
  );
}
