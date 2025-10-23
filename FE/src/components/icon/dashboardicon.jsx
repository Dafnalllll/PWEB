import React from "react";
import Detail from "../../assets/dashboard/detail.webp";
import Total from "../../assets/dashboard/total.webp";
import User from "../../assets/dashboard/user.webp";

export function TotalIcon() {
  return (
    <div className="w-4 h-4 overflow-hidden rounded-sm flex items-center justify-center">
      <img src={Total} alt="total" className="w-full h-full object-cover" />
    </div>
  );
}

export function UserIcon() {
  return (
    <div className="w-4 h-4 overflow-hidden rounded-sm flex items-center justify-center">
      <img src={User} alt="user" className="w-full h-full object-cover" />
    </div>
  );
}

export function DetailIcon() {
  return (
    <div className="w-4 h-4 overflow-hidden rounded-sm flex items-center justify-center">
      <img src={Detail} alt="detail" className="w-full h-full object-cover" />
    </div>
  );
}
