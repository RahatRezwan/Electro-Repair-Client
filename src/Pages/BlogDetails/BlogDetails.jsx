import React from "react";
import { useLoaderData } from "react-router-dom";
import useSetTitle from "../../hooks/useSetTitle";

const BlogDetails = () => {
   const blog = useLoaderData();
   const { imgUrl, title, author, description } = blog;
   useSetTitle(`${title}`);
   return (
      <div className="max-w-[1320px] mx-auto flex gap-5 mt-11">
         <div className="w-[70%] border rounded-md p-7">
            <div className="mb-7">
               <img src={imgUrl} alt="" className="mb-5 w-full" />
               <h1 className="text-4xl font-extrabold mb-5">{title}</h1>
               {/* Author */}
               <p className="font-bold mb-5">Author: {author}</p>
               <p className="text-[20px]">{description}</p>
            </div>
         </div>
      </div>
   );
};

export default BlogDetails;
