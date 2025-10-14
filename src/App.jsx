import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/notfound";
import Report from "./pages/report";
import Data from "./pages/data";
import Status from "./pages/status";
import Category from "./pages/category";
import Borrow from "./pages/borrow";
import Return from "./pages/return";
import Manage from "./pages/manage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/data" element={<Data />} />
        <Route path="/report" element={<Report />} />
        <Route path="/status" element={<Status />} />
        <Route path="/category" element={<Category />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/return" element={<Return />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
