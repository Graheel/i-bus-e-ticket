import React from 'react';

const UserRegisterForm = () => {
  return (
    <form className="auth-form">
      <input type="text" placeholder="Username" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Register as User</button>
    </form>
  );
};

export default UserRegisterForm;
