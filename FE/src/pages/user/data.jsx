import React, { useEffect } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import DataGrid from "../../components/grid/user/data/datagrid";

export const Data = () => {
  useEffect(() => {
    document.title = "Data || InventoShoot";
  }, []);

  return (
    <div className="min-h-screen flex bg-slate-50">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-10">
        <div className="max-w-7xl mx-auto space-y-6">
          <DataGrid />
        </div>
      </main>
    </div>
  );
};

export default Data;
