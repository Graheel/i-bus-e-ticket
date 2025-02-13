import React from "react";
const AdminRegisterForm = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    alert("Admin registered successfully (dummy functionality for now).");
  };
  return (
    <form onSubmit={handleRegister}>
      <input type="text" placeholder="Admin Username" required />
      <input type="email" placeholder="Admin Email" required />
      <input type="password" placeholder="Admin Password" required />
      <button type="submit">Register as Admin</button>
    </form>
  );
};
export default AdminRegisterForm;