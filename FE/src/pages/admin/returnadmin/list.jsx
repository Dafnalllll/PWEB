import React, {useEffect} from "react";
import SidebarAdmin from "../../../components/sidebar/sidebaradmin";
import ReturnListTable from "../../../components/grid/admin/return/returnlisttable";
export const List = () => {
  useEffect(() => {
    document.title = "Return List || InventoShoot";
  }, []);
  return (
    <div className="min-h-screen flex bg-slate-50">
      <SidebarAdmin />

      <main className="flex-1 p-6 lg:p-10">
        <h1 className="text-2xl font-bold mb-4">Return List</h1>
        <ReturnListTable />
      </main>
    </div>
  );
};

export default List;
