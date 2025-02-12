import React from "react";
import Navbar from "../components/Navbar";
import PostImage from "../assets/imgs/header.jpg";
import Footer from "../components/Footer";

function SinglePost() {
  return (
    <div>
      <Navbar />

      <div className="my-5 px-10 sm:px-15 md:px-40">
        <img src={PostImage} alt="Post Image" className="mb-3 rounded-lg" />
        <div className="my-3 flex items-center text-gray-700  gap-10 px-2">
          <span>Muhammad Sultan</span>
          <span className="">04-05-2000</span>
        </div>
        <h4 className="px-2 my-3 text-xl font-semibold text-gray-600">
          Category
        </h4>
        <h2 className="md:text-3xl text-xl sm:text-2xl  font-medium">
          This is Post Title to Check the Preview on Single Post Page....
        </h2>
        <p className="leading-6 my-4 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          recusandae fugiat vitae? Impedit deserunt velit laboriosam laudantium
          hic iste enim, eaque qui reprehenderit? Qui iure vel deleniti ducimus!
          Doloremque modi iste rerum, doloribus debitis possimus natus esse
          nobis dicta delectus aspernatur? Facilis, neque? Aperiam soluta
          expedita voluptatum nemo, distinctio voluptates. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Vero recusandae fugiat vitae?
          Impedit deserunt velit laboriosam laudantium hic iste enim, eaque qui
          reprehenderit? Qui iure vel deleniti ducimus! Doloremque modi iste
          rerum, doloribus debitis possimus natus esse nobis dicta delectus
          aspernatur? Facilis, neque? Aperiam soluta expedita voluptatum nemo,
          distinctio voluptates.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default SinglePost;
