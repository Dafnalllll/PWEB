import React, { useEffect } from "react";
import Sidebar from "../components/sidebar/sidebar";
import ManageTable from "../components/grid/manage/managetable";
import ManageGrid from "../components/grid/manage/managegrid";
export const Manage = () => {
  useEffect(() => {
    document.title = "Manage || InventoShoot";
  }, []);
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="mt-6">
          <div className="mb-4"></div>
          <ManageGrid />
        </div>
      </div>
    </div>
  );
};

export default Manage;
