import React, { useEffect } from "react";
import SidebarAdmin from "../../components/sidebar/sidebaradmin";
import DashboardGrid from "../../components/grid/admin/dashboard/dashboardgrid";
import StatisticChart from "../../components/grid/admin/dashboard/statisctic";
export const Dashboard = () => {
  useEffect(() => {
    document.title = "Admin || InventoShoot";
  }, []);
  return (
    <div className="min-h-screen flex bg-slate-50">
      <SidebarAdmin />

      <main className="flex-1 p-6 lg:p-10">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <DashboardGrid />
        <StatisticChart />
      </main>
    </div>
  );
};

export default Dashboard;
