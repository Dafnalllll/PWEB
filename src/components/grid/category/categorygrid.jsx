import React, { useState, useMemo } from "react";
import { sampleCategories } from "../category/js/sampledataCategory";
import CategoryTable from "./categorytable";

const CategoryGrid = () => {
  const [q, setQ] = useState("");

  const filteredCategories = useMemo(() => {
    const term = (q || "").trim().toLowerCase();
    if (!term) return sampleCategories;
    return sampleCategories.filter(
      (cat) =>
        cat.name.toLowerCase().includes(term) ||
        cat.kode?.toLowerCase().includes(term)
    );
  }, [q]);

  return (
    <>
      <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Data Kategori
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Kelola daftar kategori inventaris Anda
          </p>
        </div>
        <div className="w-full sm:w-auto flex items-center gap-2 sm:gap-3">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cari nama / kode kategori..."
            className="w-full sm:w-96 px-3 py-2 border rounded-lg text-sm focus:outline-none bg-white/80"
            aria-label="Cari kategori"
          />
          <button
            onClick={() => setQ("")}
            className="px-3 py-2 bg-white/70 border rounded-lg text-sm text-slate-700 hover:shadow-sm transition"
            title="Reset"
          >
            Reset
          </button>
        </div>
      </div>
      <CategoryTable categories={filteredCategories} />
    </>
  );
};

export default CategoryGrid;
