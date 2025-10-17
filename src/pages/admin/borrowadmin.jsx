import React, { useEffect } from "react";
import SidebarAdmin from "../../components/sidebar/sidebaradmin";
import BorrowGrid from "../../components/grid/admin/borrow/borrowgrid";
import StatisticChart from "../../components/grid/admin/borrow/statisticborrow";
export const BorrowAdmin = () => {
  useEffect(() => {
    document.title = "Borrow Admin || InventoShoot";
  }, []);
  return (
    <div className="min-h-screen flex bg-slate-50">
      <SidebarAdmin />

      <main className="flex-1 p-6 lg:p-10">
        <h1 className="text-2xl font-bold mb-4">Borrow Admin</h1>
        <BorrowGrid />
        <StatisticChart />
      </main>
    </div>
  );
};

export default BorrowAdmin;
