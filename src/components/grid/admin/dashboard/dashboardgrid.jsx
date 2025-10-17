import React from "react";
import TotalItemOverview from "./total";
import TotalUserOverview from "./totaluser";
import TotalBorrowOverview from "./totalborrow";
import TotalReturnOverview from "./totalreturn";

export default function DashboardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <TotalItemOverview />
      <TotalUserOverview />
      <TotalBorrowOverview />
      <TotalReturnOverview />
    </div>
  );
}
