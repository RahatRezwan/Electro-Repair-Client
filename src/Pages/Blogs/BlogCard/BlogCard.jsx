import { Button, Card } from "flowbite-react";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
   const { _id, imgUrl, title, description } = blog;
   const excerpt = description.slice(0, 100) + "...";
   return (
      <Card>
         <PhotoProvider>
            <PhotoView src={imgUrl}>
               <img src={imgUrl} alt="Service_image" className="rounded-md border cursor-pointer" />
            </PhotoView>
         </PhotoProvider>
         <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
         </h5>
         <p className="font-normal text-gray-700 dark:text-gray-400">{excerpt}</p>

         <div className="flex justify-start">
            <Link to={`/blogs/${_id}`}>
               <Button>See Details</Button>
            </Link>
         </div>
      </Card>
   );
};

export default BlogCard;
