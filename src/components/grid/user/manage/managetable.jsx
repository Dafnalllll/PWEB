import React from "react";

const ManageTable = ({ users }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-2xl shadow-xl border border-slate-100">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-gray-100">
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
              <tr key={user.id} className="hover:bg-gray-100 transition-colors">
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
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      user.role === "Admin"
                        ? "bg-blue-500 text-white"
                        : user.role === "Operator"
                        ? "bg-yellow-400 text-slate-900"
                        : "bg-slate-300 text-slate-700"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      user.aktif
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.aktif ? "Aktif" : "Nonaktif"}
                  </span>
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
