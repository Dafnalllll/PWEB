import React from "react";
import { ReturnIcon } from "../../../icon/sidebaricon";

const returns = [
  { id: 1, name: "Laptop", user: "Dafa", date: "2025-10-15" },
  { id: 2, name: "Monitor", user: "Siti", date: "2025-10-16" },
  // Tambahkan data return lain di sini
];

export default function TotalReturnOverview() {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded shadow">
      <div className="bg-blue-100 text-blue-700 rounded-full p-3">
        <ReturnIcon size={32} />
      </div>
      <div>
        <div className="text-sm text-slate-500">Total Return</div>
        <div className="text-2xl font-bold">{returns.length}</div>
      </div>
    </div>
  );
}
