import React from "react";
import { useNavigate } from "react-router-dom";

const AdminLoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    navigate("/admin-dashboard");
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Admin Username" required />
        <input type="password" placeholder="Admin Password" required />
        <button type="submit">Admin Login</button>
      </form>
    </div>
  );
};

export default AdminLoginForm;
