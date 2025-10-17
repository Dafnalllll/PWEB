import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import InventoShoot from "../../assets/inventoshoot.webp";
import {
  DashboardIcon,
  DataIcon,
  AddIcon,
  ManageIcon,
  BorrowIcon,
  HistoryIcon,
  RequestIcon,
  ListIcon,
  ReturnIcon,
} from "../icon/sidebaricon";

export default function SidebarAdmin({ items = null }) {
  const navigate = useNavigate();
  const [active, setActive] = useState("dashboard");
  const [openMenus, setOpenMenus] = useState([]); // <-- hanya ini
  const location = useLocation();
  const navItems = items ?? [
    { key: "admin", label: "Dashboard", icon: DashboardIcon, badge: null },
    {
      key: "dataadmin",
      label: "Data",
      icon: DataIcon,
      badge: null,
      children: [
        {
          key: "add",
          label: "Add Item",
          icon: AddIcon,
          badge: null,
          path: "/admin/dataadmin/add",
        },
      ],
      path: "/admin/dataadmin",
    },
    {
      key: "borrowadmin",
      label: "Borrow",
      icon: BorrowIcon,
      badge: null,
      children: [
        {
          key: "borrowlist",
          label: "List",
          icon: ListIcon,
          badge: null,
          path: "/admin/borrowadmin/list",
        },
        {
          key: "request",
          label: "Request ",
          icon: RequestIcon,
          badge: 4,
          path: "/admin/borrowadmin/request",
        },
        {
          key: "history",
          label: "History",
          icon: HistoryIcon,
          badge: null,
          path: "/admin/borrowadmin/history",
        },
      ],
      path: "/admin/borrowadmin",
    },
    {
      key: "returnadmin",
      label: "Return",
      icon: ReturnIcon,
      badge: null,
      children: [
        {
          key: "list",
          label: "List",
          icon: ListIcon,
          badge: null,
          path: "/admin/returnadmin/list",
        },
        {
          key: "request",
          label: "Request",
          icon: RequestIcon,
          badge: null,
          path: "/admin/returnadmin/request",
        },
        {
          key: "history",
          label: "History",
          icon: HistoryIcon,
          badge: null,
          path: "/admin/returnadmin/history",
        },
      ],
      path: "/admin/returnadmin",
    },
    { key: "manage", label: "Manage", icon: ManageIcon, badge: null },
  ];
  useEffect(() => {
    const p = location.pathname.replace(/^\/+/g, "");
    setActive(p === "" ? "dashboard" : p);
    // Jangan setOpenMenus di sini!
  }, [location]);

  useEffect(() => {
    localStorage.setItem("openMenus", JSON.stringify(openMenus));
  }, [openMenus]);

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
          const isActive =
            active === it.key ||
            (it.children && it.children.some((child) => active === child.key));
          const toPath =
            it.path || (it.key === "dashboard" ? "/" : `/${it.key}`);
          const hasChildren = !!it.children;
          const isOpen = openMenus.includes(it.key);
          return (
            <div key={it.key} className="relative">
              <div className="flex items-center">
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
                  style={{ flex: 1 }} // tambahkan agar Link tidak menutupi tombol panah
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
                {/* Panah jika ada children */}
                {hasChildren && (
                  <button
                    type="button"
                    className="ml-2 flex items-center focus:outline-none cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation(); // cegah bubbling ke Link parent
                      setOpenMenus((prev) =>
                        prev.includes(it.key)
                          ? prev.filter((k) => k !== it.key)
                          : [...prev, it.key]
                      );
                    }}
                    tabIndex={-1}
                  >
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                )}
              </div>
              {/* Render children jika openMenu aktif */}
              {hasChildren &&
                isOpen &&
                it.children.map((child) => {
                  const isChildActive = active === child.key;
                  const childPath = child.path || `/${child.key}`;
                  return (
                    <Link
                      key={child.key}
                      to={childPath}
                      onClick={() => {
                        setActive(child.key);
                        // setOpenMenus([]); // Hapus baris ini agar panah tetap terbuka
                      }}
                      className={`ml-10 flex items-center gap-2 px-3 py-1 rounded-lg text-sm transition-all duration-150 ${
                        isChildActive
                          ? "bg-blue-50 text-blue-700 font-semibold"
                          : "hover:bg-blue-100 text-slate-700"
                      }`}
                      aria-current={isChildActive ? "page" : undefined}
                      tabIndex={0}
                    >
                      <span className="w-6 h-6 flex items-center justify-center">
                        <child.icon />
                      </span>
                      {child.label}
                    </Link>
                  );
                })}
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
                Halo, Admin
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
