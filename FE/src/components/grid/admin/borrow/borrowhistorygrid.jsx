import React from "react";
import { sampleDataHistory } from "./js/sampledataBorrow";
import {BorrowIcon} from "../../../icon/sidebaricon";

export default function BorrowHistoryGrid() {
  // Hanya ambil data dengan status "Selesai"
  const totalBarang = sampleDataHistory.reduce(
    (acc, item) => acc + item.jumlah,
    0
  );
  const selesaiHistory = sampleDataHistory.filter(
    (h) => h.status === "Selesai"
    
  );

  const totalHistory = selesaiHistory.length;

  return (
    <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow max-w-sm mx-auto border border-slate-100">
      <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center">
        <BorrowIcon className="w-8 h-8" />
      </div>
      <div>
        <div className="text-lg text-slate-600 font-semibold mb-1">
          Barang Dikembalikan
        </div>
        <div className="text-3xl font-bold text-green-900">{totalHistory}</div>
        <div className="text-sm text-slate-500 mt-1">
          Total Barang Dipinjam:{" "}
          <span className="font-bold">{totalBarang}</span>
        </div>
      </div>
    </div>
  );
}
