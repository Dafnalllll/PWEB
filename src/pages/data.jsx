import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "../components/sidebar/sidebar";
import { ItemsGrid, CategoriesGrid } from "../components/grid/data/datagrid";
import {
  sampleItems,
  sampleCategories,
} from "../components/grid/data/js/sampledataData";

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
          <header className=" p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">
                Data Barang
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Kelola daftar barang dan kategori inventaris Anda
              </p>
            </div>

            <div className="w-full sm:w-auto flex items-center gap-3">
              <div className="flex items-center gap-2 w-full sm:w-96">
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Cari nama / kode / kategori / lokasi..."
                  className="w-full px-3 py-2 border rounded-lg text-sm  focus:outline-none bg-white/80"
                  aria-label="Cari data"
                />
                <button
                  onClick={() => setQ("")}
                  className="hidden sm:inline-flex px-3 py-2 bg-white/70 border rounded-lg text-sm text-slate-700 hover:shadow-sm transition"
                  title="Reset"
                >
                  Reset
                </button>
              </div>
            </div>
          </header>

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
