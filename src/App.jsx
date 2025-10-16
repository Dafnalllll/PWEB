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
import Manage from "./pages/user/manage";
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
        {/* User routes */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/data" element={<Data />} />
        <Route path="/report" element={<Report />} />
        <Route path="/status" element={<Status />} />
        <Route path="/category" element={<Category />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/return" element={<Return />} />
        <Route path="/manage" element={<Manage />} />

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
