import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Dashboard from "./pages/user/dashboard";
import NotFound from "./pages/notfound";
import Report from "./pages/user/report";
import Data from "./pages/user/data";
import Status from "./pages/user/status";
import Category from "./pages/user/category";
import Borrow from "./pages/user/borrow";
import Return from "./pages/user/return";
import Manage from "./pages/admin/manage";
import DashboardAdmin from "./pages/admin/dashboard";
import DataAdmin from "./pages/admin/dataadmin";
import DataAddAdmin from "./pages/admin/dataadmin/dataaddadmin";
{
  /* Borrow Admin */
}
import BorrowAdmin from "./pages/admin/borrowadmin";
import BorrowList from "./pages/admin/borrowadmin/list";
import BorrowRequest from "./pages/admin/borrowadmin/request";
import BorrowHistory from "./pages/admin/borrowadmin/history";
{
  /* Return Admin */
}
import Returnadmin from "./pages/admin/returnadmin";
import ReturnList from "./pages/admin/returnadmin/list";
import ReturnRequest from "./pages/admin/returnadmin/request";
import ReturnHistory from "./pages/admin/returnadmin/history";

import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signup";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Admin routes */}
        <Route path="/admin" element={<DashboardAdmin />} />

        {/*  Routes for DataAdmin and DataAddAdmin */}
        <Route path="/admin/dataadmin" element={<DataAdmin />} />
        <Route path="/admin/dataadmin/add" element={<DataAddAdmin />} />

        {/* Routes for BorrowAdmin, List, Request, and History */}

        <Route path="/admin/borrowadmin" element={<BorrowAdmin />} />
        <Route path="/admin/borrowadmin/request" element={<BorrowRequest />} />
        <Route path="/admin/borrowadmin/history" element={<BorrowHistory />} />
        <Route path="/admin/borrowadmin/list" element={<BorrowList />} />

        {/* Routes for ReturnAdmin, List, Request, and History */}
        <Route path="/admin/returnadmin" element={<Returnadmin />} />
        <Route path="/admin/returnadmin/request" element={<ReturnRequest />} />
        <Route path="/admin/returnadmin/history" element={<ReturnHistory />} />
        <Route path="/admin/returnadmin/list" element={<ReturnList />} />

        {/*Manage Route*/}
        <Route path="/manage" element={<Manage />} />

        {/* User routes */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/data" element={<Data />} />
        <Route path="/report" element={<Report />} />
        <Route path="/status" element={<Status />} />
        <Route path="/category" element={<Category />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/return" element={<Return />} />

        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
