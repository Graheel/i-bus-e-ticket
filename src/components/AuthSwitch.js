import React, { useState } from "react";
import UserLoginForm from "./UserLoginForm";
import AdminLoginForm from "./AdminLoginForm";
import UserRegisterForm from "./UserRegisterForm";
import AdminRegisterForm from "./AdminRegisterForm";
import DriverLoginForm from "./DriverLoginForm";
import DriverRegisterForm from "./DriverRegisterForm";
import "./AuthSwitch.css";

const AuthSwitch = ({ authType, setAuthType }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <h2>
          {isLogin
            ? authType === "user"
              ? "User Login"
              : authType === "admin"
              ? "Admin Login"
              : "Driver Login"
            : authType === "user"
            ? "User Register"
            : authType === "admin"
            ? "Admin Register"
            : "Driver Register"}
        </h2>
        <button className="switch-btn" onClick={handleSwitch}>
          {isLogin ? "Switch to Register" : "Switch to Login"}
        </button>
      </div>

      {/* Conditional rendering of login/register forms */}
      {authType === "user" ? (
        isLogin ? <UserLoginForm /> : <UserRegisterForm />
      ) : authType === "admin" ? (
        isLogin ? <AdminLoginForm /> : <AdminRegisterForm />
      ) : isLogin ? (
        <DriverLoginForm />
      ) : (
        <DriverRegisterForm />
      )}

      <div className="auth-toggle">
        <button onClick={() => setAuthType("user")} className="switch-user">
          User
        </button>
        <button onClick={() => setAuthType("admin")} className="switch-user">
          Admin
        </button>
        <button onClick={() => setAuthType("driver")} className="switch-user">
          Driver
        </button>
      </div>
    </div>
  );
};

export default AuthSwitch;
