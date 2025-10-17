import React from "react";
import { TotalIcon } from "../../../icon/sidebaricon";

const items = [
  { id: 1, name: "Laptop", category: "Elektronik" },
  { id: 2, name: "Monitor", category: "Elektronik" },
  { id: 3, name: "Meja", category: "Furniture" },
  // Tambahkan data barang lain di sini
];

export default function TotalItemOverview() {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded shadow">
      <div className="bg-yellow-100 text-yellow-700 rounded-full p-3">
        <TotalIcon size={32} />
      </div>
      <div>
        <div className="text-sm text-slate-500">Total Product</div>
        <div className="text-2xl font-bold">{items.length}</div>
      </div>
    </div>
  );
}
