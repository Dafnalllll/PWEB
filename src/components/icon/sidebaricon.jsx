import React from "react";
import Dashboard from "../../assets/sidebar/dashboard.webp";
import Data from "../../assets/sidebar/data.webp";
import Category from "../../assets/sidebar/category.webp";
import Status from "../../assets/sidebar/status.webp";
import Borrow from "../../assets/sidebar/borrow.webp";
import Return from "../../assets/sidebar/return.webp";
import Manage from "../../assets/sidebar/management.webp";
import Report from "../../assets/sidebar/report.webp";
import Add from "../../assets/sidebar/add.webp";

export function AddIcon() {
  return (
    <div className="w-5 h-5 overflow-hidden flex items-center justify-center">
      <img src={Add} alt="add" className="w-full h-full object-cover" />
    </div>
  );
}

export function DashboardIcon() {
  return (
    <div className="w-5 h-5 overflow-hidden flex items-center justify-center">
      <img
        src={Dashboard}
        alt="dashboard"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export function DataIcon() {
  return (
    <div className="w-5 h-5 overflow-hidden flex items-center justify-center">
      <img src={Data} alt="data" className="w-full h-full object-cover" />
    </div>
  );
}

export function StatusIcon() {
  return (
    <div className="w-5 h-5 overflow-hidden flex items-center justify-center">
      <img src={Status} alt="status" className="w-full h-full object-cover" />
    </div>
  );
}

/* tambahan bila ingin pakai icon kategori di masa depan */
export function CategoryIcon() {
  return (
    <div className="w-5 h-5 overflow-hidden flex items-center justify-center">
      <img
        src={Category}
        alt="category"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export function BorrowIcon() {
  return (
    <div className="w-5 h-5 overflow-hidden flex items-center justify-center">
      <img
        src={Borrow}
        alt="borrow"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export function ReturnIcon() {
  return (
    <div className="w-5 h-5 overflow-hidden flex items-center justify-center">
      <img
        src={Return}
        alt="return"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export function ManageIcon() {
  return (
    <div className="w-5 h-5 overflow-hidden flex items-center justify-center">
      <img
        src={Manage}
        alt="manage"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export function ReportIcon() {
  return (
    <div className="w-5 h-5 overflow-hidden flex items-center justify-center">
      <img
        src={Report}
        alt="report"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

