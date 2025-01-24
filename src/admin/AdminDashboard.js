import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom"; 
import Sidebar from "./Sidebar";
import DashboardOverview from "./DashboardOverview";
import UsersPage from "./UsersPage";
import ContentPage from "./ContentPage";
import "./AdminDashboard.css";

const AdminDashboard = ({ setShowNavbar }) => {
  const navigate = useNavigate(); 

  useEffect(() => {
    setShowNavbar(false); 
    return () => setShowNavbar(true);
  }, [setShowNavbar]);

  // Handle exit action
  const handleExit = () => {
    navigate("/src/pages/LoginRegister.js"); 
  };

  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <button className="exit-btn" onClick={handleExit}>
          Exit to Main Website
        </button>

        <Routes>
          <Route path="/" element={<DashboardOverview />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="content" element={<ContentPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
