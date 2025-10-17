import React from "react";
import ReturnRequestGrid from "./returnrequestgrid";
import ReturnListGrid from "./returnlistgrid";
import ReturnHistoryGrid from "./returnhistorygrid";

export default function ReturnGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <div>
        <ReturnRequestGrid />
      </div>
      <div>
        <ReturnListGrid />
      </div>
      <div>
        <ReturnHistoryGrid />
      </div>
    </div>
  );
}
