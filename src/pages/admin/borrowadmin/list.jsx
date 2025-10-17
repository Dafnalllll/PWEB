import React, { useEffect } from "react";
import SidebarAdmin from "../../../components/sidebar/sidebaradmin";
import BorrowListTable from "../../../components/grid/admin/borrow/borrowlisttable";
export const List = () => {
  useEffect(() => {
    document.title = "Borrow List || InventoShoot";
  }, []);
  return (
    <div className="min-h-screen flex bg-slate-50">
      <SidebarAdmin />

      <main className="flex-1 p-6 lg:p-10">
        <h1 className="text-2xl font-bold mb-4">List</h1>
        <BorrowListTable />
      </main>
    </div>
  );
};

export default List;
