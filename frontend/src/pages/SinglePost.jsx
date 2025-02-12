import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/post/single/${id}`)
      .then((res) => {
        setPost(res.data.post);
      })
      .catch((er) => {
        console.error("Error fetching post:", er);
      });
  }, [id]); // ✅ Ensures re-fetching when `id` changes

  if (!post) {
    return <div className="text-center py-10">Loading...</div>; // ✅ Prevents errors while data is loading
  }

  return (
    <div>
      <Navbar />

      <div className="my-5 px-10 sm:px-15 md:px-40">
        <img
          src={post.image}
          alt="Post"
          className="mb-3 rounded-lg object-cover"
        />
        <div className="my-3 flex items-center text-gray-700 gap-10 px-2">
          <span>{post.authorId?.name || "Unknown Author"}</span>
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        </div>
        <h4 className="px-2 my-3 text-xl font-semibold text-gray-600">
          Category
        </h4>
        <h2 className="md:text-3xl text-xl sm:text-2xl font-medium">
          {post.title}
        </h2>
        <p className="leading-6 my-4 text-justify">{post.description}</p>
      </div>

      <Footer />
    </div>
  );
}

export default SinglePost;
