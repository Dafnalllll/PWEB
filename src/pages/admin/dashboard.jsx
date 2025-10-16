import React from "react";
import SidebarAdmin from "../../components/sidebar/sidebaradmin";
export const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-slate-50">
      <SidebarAdmin />

      <main className="flex-1 p-6 lg:p-10"></main>
    </div>
  );
};

export default Dashboard;
