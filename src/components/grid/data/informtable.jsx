import React from "react";

export default function TableCard({ title, subtitle, items = [] }) {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-lg">
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
          {title}
        </h3>
        {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md py-8 px-4 transition hover:shadow-lg cursor-pointer"
          >
            <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-lg bg-yellow-50">
              {item.icon}
            </div>
            <div className="text-base font-semibold text-yellow-700 text-center">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
