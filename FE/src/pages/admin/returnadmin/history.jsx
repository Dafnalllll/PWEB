import React, {useEffect} from "react";
import SidebarAdmin from "../../../components/sidebar/sidebaradmin";
import ReturnHistoryTable from "../../../components/grid/admin/return/returnhistorytable";
export const History = () => {
    useEffect(() => {
        document.title = "Return History || InventoShoot";
    }, []);
  return (
    <div className="min-h-screen flex bg-slate-50">
      <SidebarAdmin />

      <main className="flex-1 p-6 lg:p-10">
        <h1 className="text-2xl font-bold mb-4">Return History</h1>
        <ReturnHistoryTable />
      </main>
    </div>
  );
};

export default History;