// Layout.js
import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import './index.css'
const Layout = ({ children }) => {

  return (
    <div className="layout-container">
      <Sidebar />
      <div className="body-container">
        <Navbar />
        <div className="child" style={{ backgroundColor: "#FAF7F7" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
