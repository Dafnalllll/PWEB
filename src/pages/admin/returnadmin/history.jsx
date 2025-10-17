import React, {useEffect} from "react";
import SidebarAdmin from "../../../components/sidebar/sidebaradmin";
export const History = () => {
    useEffect(() => {
        document.title = "Return History || InventoShoot";
    }, []);
  return (
    <div className="min-h-screen flex bg-slate-50">
      <SidebarAdmin />

      <main className="flex-1 p-6 lg:p-10">
        <h1 className="text-2xl font-bold mb-4">Return History  Admin</h1>
      </main>
    </div>
  );
};

export default History;