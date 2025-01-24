import React, { useState } from "react";
import UserLoginForm from "./UserLoginForm";
import AdminLoginForm from "./AdminLoginForm";
import UserRegisterForm from "./UserRegisterForm";
import AdminRegisterForm from "./AdminRegisterForm";
import "./AuthSwitch.css"; 

const AuthSwitch = ({ isUser, setIsUser }) => {
  const [isLogin, setIsLogin] = useState(true); 

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <h2>{isLogin ? (isUser ? "User Login" : "Admin Login") : (isUser ? "User Register" : "Admin Register")}</h2>
        <button className="switch-btn" onClick={handleSwitch}>
          {isLogin ? "Switch to Register" : "Switch to Login"}
        </button>
      </div>
      
      {/* Conditionally render login or register forms based on state */}
      {isUser ? (
        isLogin ? (
          <UserLoginForm />
        ) : (
          <UserRegisterForm />
        )
      ) : (
        isLogin ? (
          <AdminLoginForm />
        ) : (
          <AdminRegisterForm />
        )
      )}

      <div className="auth-toggle">
        <button onClick={() => setIsUser(!isUser)} className="switch-user">
          Switch to {isUser ? "Admin" : "User"}
        </button>
      </div>
    </div>
  );
};

export default AuthSwitch;
