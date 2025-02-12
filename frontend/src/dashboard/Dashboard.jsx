import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import image from "../assets/imgs/header.jpg";
import PostDataTable from "../components/PostDataTable";
function Dashboard() {
  const AuthCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!AuthCtx.isLogin) {
      navigate("/login");
    } else {
      // Fetch user posts
      axios
        .get("http://localhost:3001/post/get", {
          headers: { Authorization: `Bearer ${AuthCtx.token}` },
        })
        .then((res) => {
          setPosts(res.data.posts);
        })
        .catch((err) => {
          console.error("Error fetching posts:", err);
        });
    }
  }, [AuthCtx, navigate]);

  return (
    <div>
      <Navbar />

      <div className="container mx-auto my-10 p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Sidebar: User Profile */}
          <div className="bg-white p-5 shadow-md rounded-lg flex flex-col items-center">
            <img
              src={image}
              alt="User"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">
              {AuthCtx.user?.name || "User Name"}
            </h2>
          </div>

          {/* Right Side: Posts Table */}
          <div className="md:col-span-2 bg-white p-5 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Your Posts</h2>
            <div className="overflow-x-auto">
              <PostDataTable posts={posts} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;
