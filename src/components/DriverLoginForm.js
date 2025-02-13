import React from 'react';
const DriverLoginForm = () => (
  <form className="auth-form">
    <input type="text" placeholder="Driver Username" required />
    <input type="password" placeholder="Password" required />
    <button type="submit">Driver Login</button>
  </form>
);
export default DriverLoginForm;
