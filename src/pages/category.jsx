import React, { useEffect } from "react";
import Sidebar from "../components/sidebar/sidebar";
import CategoryGrid from "../components/grid/category/categorygrid";

export const Category = () => {
  useEffect(() => {
    document.title = "Category || InventoShoot";
  }, []);

  return (
    <div className="min-h-screen flex bg-slate-50">
      <Sidebar />

      <main className="flex-1 p-6 lg:p-10">
        <div className="max-w-7xl mx-auto space-y-6">
          <section>
            <CategoryGrid />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Category;
