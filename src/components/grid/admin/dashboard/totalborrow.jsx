import React from "react";
import { BorrowIcon } from "../../../icon/sidebaricon";

const borrows = [
  { id: 1, name: "Laptop", user: "Dafa", date: "2025-10-15" },
  { id: 2, name: "Monitor", user: "Siti", date: "2025-10-16" },
  // Tambahkan data borrow lain di sini
];

export default function TotalBorrowOverview() {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded shadow">
      <div className="bg-purple-100 text-purple-700 rounded-full p-3">
        <BorrowIcon size={32} />
      </div>
      <div>
        <div className="text-sm text-slate-500">Total Borrow</div>
        <div className="text-2xl font-bold">{borrows.length}</div>
      </div>
    </div>
  );
}
