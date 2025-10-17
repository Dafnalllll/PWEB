import React, { useEffect } from "react";
import SidebarAdmin from "../../../components/sidebar/sidebaradmin";
import ReturnRequestTable from "../../../components/grid/admin/return/returnrequesttable";
export const Request = () => {
  useEffect(() => {
    document.title = "Return Request || InventoShoot";
  }, []);

  return (
    <div className="min-h-screen flex bg-slate-50">
      <SidebarAdmin />

      <main className="flex-1 p-6 lg:p-10">
        <h1 className="text-2xl font-bold mb-4">Return Request</h1>
        <ReturnRequestTable />
      </main>
    </div>
  );
};

export default Request;
