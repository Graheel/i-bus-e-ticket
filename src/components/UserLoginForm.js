import React from "react";
const UserLoginForm = () => (
  <form className="auth-form">
    <input type="text" placeholder="Username" required />
    <input type="password" placeholder="Password" required />
    <button type="submit">User Login</button>
  </form>
);
export default UserLoginForm;