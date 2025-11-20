import React, { useMemo, useState } from "react";
import TableCard from "./informtable";
import { sampleItems, sampleCategories } from "./js/sampledataData";

function statusClassName(s) {
  switch ((s || "").toLowerCase()) {
    case "baik":
      return "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700";
    case "rusak":
      return "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700";
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
function DataHeader({ q, setQ }) {
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
            placeholder="Cari nama / kategori ...."
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
function ItemsGrid({ items = sampleItems }) {
  const categoryMap = buildCategoryMap(sampleCategories);

  if (!items.length) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="mb-4 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-sky-100 to-slate-100 shadow-lg">
          {/* Ganti ikon dengan ikon search */}
          <svg
            className="w-10 h-10 text-sky-400"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="11"
              cy="11"
              r="7"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="16.5"
              y1="16.5"
              x2="21"
              y2="21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="text-lg font-semibold text-slate-700">
          Barang tidak ditemukan
        </div>
        <div className="text-xs text-slate-400 mt-2">
          Coba kata kunci lain atau cek kategori yang tersedia.
        </div>
      </div>
    );
  }

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
function CategoriesGrid({
  categories = sampleCategories,
  items = sampleItems,
}) {
  const counts = items.reduce((acc, it) => {
    acc[it.category] = (acc[it.category] || 0) + 1;
    return acc;
  }, {});

  // Filter kategori yang ada itemnya
  const filteredCategories = categories.filter(
    (c) => (counts[c.name] ?? 0) > 0
  );

  if (!filteredCategories.length) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <div className="mb-3 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-pink-100 to-slate-100 shadow">
          {/* Ganti ikon dengan ikon folder-off */}
          <svg
            className="w-7 h-7 text-pink-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              d="M3 7h5l2 3h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <line
              x1="3"
              y1="3"
              x2="21"
              y2="21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="text-base font-semibold text-slate-700">
          Kategori tidak ditemukan
        </div>
        <div className="text-xs text-slate-400 mt-2">
          Tidak ada kategori yang sesuai dengan pencarian.
        </div>
      </div>
    );
  }

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

/* Komponen utama DataGrid */
export default function DataGrid() {
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

  return (
    <>
      <DataHeader q={q} setQ={setQ} />

      <section>
        <h2 className="text-sm font-medium text-slate-700 mb-3">Kategori</h2>
        <CategoriesGrid categories={sampleCategories} items={sampleItems} />
      </section>

      <section>
        <ItemsGrid items={filteredItems} />
      </section>
    </>
  );
}
