import React from 'react';
const DriverRegisterForm = () => (
  <form className="auth-form">
    <input type="text" placeholder="Driver Username" required />
    <input type="email" placeholder="Email" required />
    <input type="password" placeholder="Password" required />
    <button type="submit">Register as Driver</button>
  </form>
);
export default DriverRegisterForm;