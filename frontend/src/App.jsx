import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from "antd";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
          <h1 className="text-2xl font-bold">Blog</h1>
          <div>
            <Link to="/" className="mr-4">
              Home
            </Link>
            <Link to="/login" className="mr-4">
              Login
            </Link>
            <Link to="/signup">Signup</Link>
          </div>

          <div>
            <Button type="primary" className="mr-2">
              Login
            </Button>
            <Button type="default">Signup</Button>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
