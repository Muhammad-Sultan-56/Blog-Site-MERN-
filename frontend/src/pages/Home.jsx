import React from "react";
import { Button, Card } from "antd";
import Navbar from "../components/Navbar";
import headerImage from "../assets/imgs/header.jpg";

const blogs = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/30469688/pexels-photo-30469688/free-photo-of-elegant-fine-dining-plated-gourmet-dishes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "First Blog",
    description: "This is a short description of the first blog post.",
    author: "John Doe",
    date: "Feb 6, 2025",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/29847092/pexels-photo-29847092/free-photo-of-icelandic-landscape-at-sunset-with-jimny.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Second Blog",
    description: "This is a short description of the second blog post.",
    author: "Jane Smith",
    date: "Feb 5, 2025",
  },
];

const categories = [
  "Technology",
  "Lifestyle",
  "Business",
  "Health",
  "Education",
];

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "#edf5ff",
      }}
    >
      <Navbar />

      <header
        style={{
          minHeight: "75vh",
          backgroundImage: `url(${headerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></header>

      <div className="container p-6 px-12">
        <div className="min-h-screen">
          {/* Main Content */}
          <div className="my-6">
            <h2 className="mb-1 text-3xl font-semibold">All Blogs</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className=" mx-auto flex gap-6">
            {/* Blog Posts */}

            <div className="w-3/4 grid grid-cols-1 md:grid-cols-3 gap-5">
              {blogs.map((blog) => (
                <Card
                  key={blog.id}
                  cover={<img alt={blog.title} src={blog.image} />}
                  className="shadow-lg"
                >
                  <h2 className="text-xl font-semibold">{blog.title}</h2>
                  <p className="text-gray-600">{blog.description}</p>
                  <div className="text-sm text-gray-500 mt-2">
                    <span>
                      By {blog.author} • {blog.date}
                    </span>
                  </div>
                  <Button type="link" className="mt-2">
                    Read More
                  </Button>
                </Card>
              ))}
            </div>

            {/* Categories */}
            <aside className="w-1/4 p-4 bg-white shadow-md rounded-md h-fit">
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <ul>
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className="py-2 px-2 border-b border-gray-200 last:border-none"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
