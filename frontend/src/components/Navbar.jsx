import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { AuhtContext } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const AuthCtx = useContext(AuhtContext); // Get isLogin from context

  return (
    <>
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md z-20 sticky">
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Blog
        </h1>

        <div>
          {AuthCtx.isLogin ? (
            <>
              <Button
                type="primary"
                className="mr-2"
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </Button>
              <Button
                type="primary"
                danger
                onClick={() => console.log("Logout")}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                type="primary"
                className="mr-2"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Button onClick={() => navigate("/signup")} type="default">
                Signup
              </Button>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
