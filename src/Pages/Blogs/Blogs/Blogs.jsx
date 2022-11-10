import React from "react";
import { useLoaderData } from "react-router-dom";
import useSetTitle from "../../../hooks/useSetTitle";
import BlogCard from "../BlogCard/BlogCard";

const Blogs = () => {
   const blogs = useLoaderData();
   useSetTitle("Blogs");
   return (
      <div className="max-w-[1320px] w-[95%] mx-auto my-10">
         <h1 className="text-3xl font-bold uppercase my-4">All Blogs</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogs.map((blog) => (
               <BlogCard key={blog._id} blog={blog} />
            ))}
         </div>
      </div>
   );
};

export default Blogs;
