import React from "react";
import TableCard from "./informtable";
import { sampleItems, sampleCategories } from "./js/sampledataData";

function statusClassName(s) {
  switch ((s || "").toLowerCase()) {
    case "baik":
      return "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700";
    default:
      return "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700";
  }
}

function buildCategoryMap(categories = []) {
  const map = new Map();
  categories.forEach((c) => map.set(c.name, c.color || "#94A3B8"));
  return map;
}

/* Header & Search */
export function DataHeader({ q, setQ }) {
  return (
    <header className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Data Barang</h1>
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
            className="hidden sm:inline-flex px-3 py-2 bg-white/70 border rounded-lg text-sm text-slate-700 hover:shadow-sm transition-all hover:scale-105 cursor-pointer"
            title="Reset"
          >
            Reset
          </button>
        </div>
      </div>
    </header>
  );
}

/* Items grid (tabel daftar barang) */
export function ItemsGrid({ items = sampleItems }) {
  const categoryMap = buildCategoryMap(sampleCategories);
  const gridItems = items.map((item) => ({
    icon: (
      <img
        src={item.image}
        alt={item.name}
        className="w-12 h-12 object-contain"
      />
    ),
    label: (
      <div className="flex flex-col items-center">
        <span className="font-semibold text-yellow-700">{item.name}</span>
        <span
          className={statusClassName(item.condition)}
          style={{ marginTop: 4 }}
        >
          {item.condition}
        </span>
        <span
          className="mt-1 text-xs font-medium px-2 py-1 rounded"
          style={{
            backgroundColor: categoryMap.get(item.category) || "#94A3B8",
            color: "#fff",
            display: "inline-block",
          }}
        >
          {item.category}
        </span>
      </div>
    ),
  }));

  return (
    <TableCard
      title="Daftar Barang"
      subtitle={`Total: ${items.length}`}
      items={gridItems}
    />
  );
}

/* Categories grid (kartu kategori dengan jumlah item) */
export function CategoriesGrid({
  categories = sampleCategories,
  items = sampleItems,
}) {
  const counts = items.reduce((acc, it) => {
    acc[it.category] = (acc[it.category] || 0) + 1;
    return acc;
  }, {});
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map((c) => (
        <div
          key={c.id}
          className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm flex items-center justify-between cursor-pointer"
        >
          <div>
            <div className="text-sm font-semibold text-slate-900">{c.name}</div>
            <div className="text-xs text-slate-500 mt-1">
              {counts[c.name] ?? 0} item
            </div>
          </div>
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-semibold"
            style={{ backgroundColor: c.color || "#94A3B8" }}
          >
            {String(counts[c.name] ?? 0)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemsGrid;
