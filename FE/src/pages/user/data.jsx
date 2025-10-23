import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import {
  ItemsGrid,
  CategoriesGrid,
  DataHeader,
} from "../../components/grid/user/data/datagrid";
import {
  sampleItems,
  sampleCategories,
} from "../../components/grid/user/data/js/sampledataData";

export const Data = () => {
  useEffect(() => {
    document.title = "Data || InventoShoot";
  }, []);

  const [q, setQ] = useState("");

  const filteredItems = useMemo(() => {
    const term = (q || "").trim().toLowerCase();
    if (!term) return sampleItems;
    return sampleItems.filter(
      (it) =>
        it.name.toLowerCase().includes(term) ||
        it.kode?.toLowerCase().includes(term) ||
        it.category?.toLowerCase().includes(term) ||
        it.location?.toLowerCase().includes(term)
    );
  }, [q]);

  const handleAdd = () => console.log("Tambah item");
  const handleExport = () => console.log("Export data");

  return (
    <div className="min-h-screen flex bg-slate-50">
      <Sidebar />

      <main className="flex-1 p-6 lg:p-10">
        <div className="max-w-7xl mx-auto space-y-6">
          <DataHeader q={q} setQ={setQ} />

          <section>
            <h2 className="text-sm font-medium text-slate-700 mb-3">
              Kategori
            </h2>
            <CategoriesGrid categories={sampleCategories} items={sampleItems} />
          </section>

          <section>
            <ItemsGrid
              items={filteredItems}
              onAdd={handleAdd}
              onExport={handleExport}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Data;
