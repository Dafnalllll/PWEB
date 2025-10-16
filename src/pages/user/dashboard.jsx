import React, { useEffect } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import DashboardGrid from "../../components/grid/dashboard/dashboardgrid";
export const Dashboard = () => {
  useEffect(() => {
    document.title = "InventoShoot";
  }, []); 
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <DashboardGrid />
      <main className="flex-1 p-6"></main>
    </div>
  );
};

export default Dashboard;
