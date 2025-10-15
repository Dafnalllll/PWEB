import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  DashboardIcon,
  DataIcon,
  StatusIcon,
  CategoryIcon,
  BorrowIcon,
  ReturnIcon,
  ManageIcon,
  ReportIcon,
} from "../icon/sidebaricon";
import InventoShoot from "../../assets/inventoshoot.webp";
export default function Sidebar({ items = null }) {
  const navigate = useNavigate();
  const [active, setActive] = useState("dashboard");
  const location = useLocation();

  const navItems = items ?? [
    { key: "dashboard", label: "Dashboard", icon: DashboardIcon, badge: null },
    { key: "data", label: "Data", icon: DataIcon, badge: null },
    { key: "status", label: "Status", icon: StatusIcon, badge: null },
    { key: "category", label: "Category", icon: CategoryIcon, badge: null },
    { key: "borrow", label: "Borrow", icon: BorrowIcon, badge: null },
    { key: "return", label: "Return", icon: ReturnIcon, badge: null },
    { key: "manage", label: "Manage", icon: ManageIcon, badge: null },
    { key: "report", label: "Report", icon: ReportIcon, badge: null },
  ];

  useEffect(() => {
    // ambil dari pathname, contoh "/" -> dashboard, "/data" -> data
    const p = location.pathname.replace(/^\/+/g, "");
    setActive(p === "" ? "dashboard" : p);
  }, [location]);

  return (
    <aside
      className="flex flex-col h-auto w-64 p-3 backdrop-blur-md bg-white/20 border-r border-white/30 shadow-lg rounded-r-xl"
      aria-label="Sidebar utama"
      style={{ boxShadow: "0 8px 30px rgba(2,6,23,0.18)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10  flex items-center justify-center ">
            <img
              src={InventoShoot}
              alt="Invento Shoot"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col -mt-0.5">
            <span className="text-slate-900 font-semibold text-sm drop-shadow-sm font-['Poppins']">
              InventoShoot
            </span>
          </div>
        </div>

        <div className="w-9 h-9" />
      </div>

      {/* Navigation */}
      <nav
        className="flex-1 overflow-y-auto p-1 space-y-1"
        role="navigation"
        aria-label="Main navigation"
      >
        {navItems.map((it) => {
          const isActive = active === it.key;
          const toPath = it.key === "dashboard" ? "/" : `/${it.key}`;
          return (
            <div key={it.key} className="relative">
              <Link
                to={toPath}
                onClick={() => setActive(it.key)}
                className={`group flex items-center gap-3 px-3 py-2 rounded-lg overflow-hidden transition-all duration-150 focus:outline-none border-l-4 border-transparent ${
                  isActive
                    ? "bg-white/30 text-slate-900 border-slate-400 font-semibold"
                    : "hover:bg-white/10 hover:border-slate-400"
                }`}
                aria-current={isActive ? "page" : undefined}
                tabIndex={0}
              >
                <span
                  className={`w-9 h-9 rounded-md flex items-center justify-center text-slate-700 transition-transform group-hover:scale-105 ${
                    isActive ? "bg-white/30" : "bg-transparent"
                  }`}
                >
                  <it.icon />
                </span>

                <span className="flex-1 text-sm text-slate-900">
                  {it.label}
                </span>

                {it.badge ? (
                  <span className="ml-2 text-xs font-medium bg-white/20 text-slate-800 px-2 py-0.5 rounded-full">
                    {it.badge}
                  </span>
                ) : null}
              </Link>
            </div>
          );
        })}
      </nav>

      {/* Footer / profile */}
      <div className="p-3 mt-2 border-t border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={`https://ui-avatars.com/api/?name=User&background=7CAED&color=fff&rounded=true`}
              alt="avatar"
              className="w-10 h-10 rounded-full shadow-sm"
            />
            <div>
              <div className="text-sm font-medium text-slate-900">
                Halo, User
              </div>
            </div>
          </div>

          <div>
            <button
              aria-label="Logout"
              title="Logout"
              className="items-center gap-2 px-3 py-1 rounded-md  border border-gray/100 text-sm text-slate-800 hover:bg-black/20 focus:outline-none cursor-pointer transition-all duration-150 flex hover:scale-105"
              onClick={() => navigate("/login")}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
