import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import AdminSideMenu from "../Admin/dashboard/AdminSideMenu";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="admin-layout">
        {/* Admin Sidebar on the left */}
        <div className="sidebar">
          <AdminSideMenu />
        </div>
        {/* Main content area */}
        <div className="content-area">
          <main>{children}</main>
        </div>
      </div>
      {/* Outlet for nested routes */}
      <div className="nested-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
