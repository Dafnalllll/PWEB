import React, { useState, useEffect } from "react";

const roleOptions = ["Admin", "User"];
const statusOptions = ["Aktif", "Nonaktif"];

const ManageTable = ({ users, onRoleChange, onStatusChange }) => {
  const [editId, setEditId] = useState(null);

  // Reset editId jika user yang sedang diedit tidak ada di users (misal setelah filter)
  useEffect(() => {
    if (editId !== null && !users.some((u) => u.id === editId)) {
      setEditId(null);
    }
  }, [users, editId]);

  return (
    <div className="overflow-x-auto bg-white rounded-2xl shadow-xl border border-slate-100">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-extrabold text-slate-700 uppercase tracking-wider">
              No
            </th>
            <th className="px-6 py-4 text-left text-xs font-extrabold text-slate-700 uppercase tracking-wider">
              Nama
            </th>
            <th className="px-6 py-4 text-left text-xs font-extrabold text-slate-700 uppercase tracking-wider">
              Username
            </th>
            <th className="px-6 py-4 text-left text-xs font-extrabold text-slate-700 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-4 text-left text-xs font-extrabold text-slate-700 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-4 text-left text-xs font-extrabold text-slate-700 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0 ? (
            users.map((user, idx) => (
              <tr
                key={user.id}
                className="bg-white hover:bg-slate-50 transition border-b last:border-b-0 border-slate-100"
              >
                <td className="px-6 py-4 text-sm text-slate-700 font-semibold">
                  {idx + 1}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-slate-800">
                  {user.nama}
                </td>
                <td className="px-6 py-4 text-sm text-blue-700 font-bold">
                  {user.username}
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">
                  {user.email}
                </td>
                <td className="px-6 py-4 text-sm">
                  <select
                    value={user.role}
                    onChange={(e) =>
                      onRoleChange && onRoleChange(user.id, e.target.value)
                    }
                    className="px-5 py-1 rounded-full text-xs font-semibold border border-gray-500 focus:outline-none bg-white text-blue-700 transition"
                    style={{ minWidth: 100 }}
                  >
                    {roleOptions.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-4 text-sm">
                  <select
                    value={user.aktif ? "Aktif" : "Nonaktif"}
                    onChange={(e) =>
                      onStatusChange &&
                      onStatusChange(user.id, e.target.value === "Aktif")
                    }
                    className={`px-5 py-1 rounded-full text-xs font-semibold border border-gray-500 focus:outline-none bg-white transition`}
                    style={{
                      minWidth: 100,
                      color: user.aktif ? "#059669" : "#dc2626",
                    }}
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={6}
                className="px-6 py-10 text-center text-slate-400 text-base italic"
              >
                Tidak ada user ditemukan.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageTable;
