import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../../Blogs/BlogCard/BlogCard";

const LatestBlogs = () => {
   const [blogs, setBlogs] = useState([]);
   useEffect(() => {
      fetch("http://localhost:5000/blogs?size=3")
         .then((res) => res.json())
         .then((data) => setBlogs(data));
   }, []);
   return (
      <div className="max-w-[1320px] w-[95%] mx-auto my-5">
         <div className="text-center mb-10">
            <h1 className="text-3xl font-extrabold uppercase mb-4">My Latest Articles</h1>
            <p>I write articles when I am free. Read those hope you enjoy it.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {blogs.map((blog) => (
               <BlogCard key={blog._id} blog={blog} />
            ))}
         </div>
         <div className="mt-5 flex justify-center">
            <Link to="/blogs">
               <Button>See All Articles</Button>
            </Link>
         </div>
      </div>
   );
};

export default LatestBlogs;
