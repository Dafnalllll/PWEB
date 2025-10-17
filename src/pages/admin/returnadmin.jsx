import React, { useEffect } from "react";
import SidebarAdmin from "../../components/sidebar/sidebaradmin";
export const Returnadmin = () => {
  useEffect(() => {
    document.title = "Return Admin || InventoShoot";
  }, []);

  return (
    <div className="min-h-screen flex bg-slate-50">
      <SidebarAdmin />

      <main className="flex-1 p-6 lg:p-10">
        <h1 className="text-2xl font-bold mb-4">Return Admin</h1>
      </main>
    </div>
  );
};

export default Returnadmin;
