import React, { useEffect } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import ReportGrid from "../../components/grid/report/reportgrid";
export const Report = () => {
  useEffect(() => {
    document.title = "Report || InventoShoot";
  }, []);
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <ReportGrid />

      <main className="flex-1 p-6"></main>
    </div>
  );
};

export default Report;
