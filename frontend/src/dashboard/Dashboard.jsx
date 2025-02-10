import React, { useContext, useEffect } from "react";
import { AuhtContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {
  const AuthCtx = useContext(AuhtContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (AuthCtx.isLogin == false) {
      navigate("/login");
    }
  });

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default Dashboard;
