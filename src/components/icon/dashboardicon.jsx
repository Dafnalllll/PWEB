import React from "react";
import Detail from "../../assets/dashboard/detail.webp";

export function IconDetail() {
  return (
    <div className="w-4 h-4 overflow-hidden rounded-sm flex items-center justify-center">
      <img src={Detail} alt="detail" className="w-full h-full object-cover" />
    </div>
  );
}
