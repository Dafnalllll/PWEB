import React from "react";
import BorrowHistoryGrid from "./borrowhistorygrid";
import BorrowListGrid from "./borrowlistgrid";
import BorrowRequestGrid from "./borrowrequestgrid";

export default function BorrowGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
      <div>
        <BorrowHistoryGrid />
      </div>
      <div>
        <BorrowListGrid />
      </div>
      <div>
        <BorrowRequestGrid />
      </div>
    </div>
  );
}
