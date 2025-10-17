import React, { useEffect } from "react";
import SidebarAdmin from "../../components/sidebar/sidebaradmin";
import DataAddTable from "../../components/grid/admin/dataadmin/dataaddtable";
export const DataAdmin = () => {
  useEffect(() => {
    document.title = "Data Admin || InventoShoot";
  }, []);
  return (
    <div className="min-h-screen flex bg-slate-50">
      <SidebarAdmin />

      <main className="flex-1 p-6 lg:p-10">
        <h1 className="text-2xl font-bold mb-4">Data Barang</h1>
        <DataAddTable />
      </main>
    </div>
  );
};

export default DataAdmin;
