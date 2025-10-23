import React, { useEffect } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import StatusGrid from "../../components/grid/user/status/statusgrid";
export const Status = () => {
  useEffect(() => {
    document.title = "Status || InventoShoot";
  }, []);
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <StatusGrid />
    </div>
  );
};

export default Status;
