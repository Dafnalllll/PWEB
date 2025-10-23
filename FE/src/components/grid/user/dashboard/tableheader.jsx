import React from "react";
import History from "../../../../assets/dashboard/history.webp";
export default function TableHeader({ title, subtitle, onAdd, onExport }) {
  return (
    <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
      <div className="flex items-start sm:items-center gap-3">
        <div>
          <div className="w-12 h-12 rounded-lg bg-white/70 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow">
            <img src={History} alt="History" className="w-6 h-6" />
          </div>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onExport}
          aria-label="Export"
          className="inline-flex items-center gap-2 px-3 py-2 bg-white/70 border border-slate-100 rounded-lg text-sm text-slate-700 hover:shadow-sm transition-all hover:scale-105 cursor-pointer"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3v12"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 7l4-4 4 4"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 21H3"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="hidden sm:inline">Export</span>
        </button>

        <button
          onClick={onAdd}
          aria-label="Tambah"
          className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-sky-600 to-sky-500 text-white rounded-lg shadow-sm hover:opacity-95 transition-all hover:scale-105 cursor-pointer"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5v14"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 12h14"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="hidden sm:inline cursor-pointer">Tambah</span>
        </button>
      </div>
    </div>
  );
}
