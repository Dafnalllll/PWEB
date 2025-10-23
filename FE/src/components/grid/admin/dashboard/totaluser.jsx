import React from "react";
import { UserIcon } from "../../../icon/dashboardicon";

const users = [
  { id: 1, name: "Admin", role: "Administrator" },
  { id: 2, name: "Dafa", role: "User" },
  { id: 3, name: "Siti", role: "User" },
  // Tambahkan data user lain di sini
];

export default function TotalUserOverview() {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded shadow">
      <div className="bg-green-100 text-green-700 rounded-full p-3">
        <UserIcon size={32} />
      </div>
      <div>
        <div className="text-sm text-slate-500">Total User</div>
        <div className="text-2xl font-bold">{users.length}</div>
      </div>
    </div>
  );
}
