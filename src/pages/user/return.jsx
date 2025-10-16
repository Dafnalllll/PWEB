import React, { useEffect } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import ReturnGrid from "../../components/grid/return/returngrid";
export const Return = () => {
  useEffect(() => {
    document.title = "Return || InventoShoot";
  }, []);
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <ReturnGrid />
      <main className="flex-1 p-6"></main>
    </div>
  );
};
export default Return;
