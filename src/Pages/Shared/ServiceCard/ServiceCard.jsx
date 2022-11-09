import { Button, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceCard = ({ service }) => {
   const { _id, imgUrl, price, title, description, duration } = service;
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
         <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-gray-600 uppercase">{price} Taka</h2>
            <Link to={`/service/${_id}`}>
               <Button>See Details</Button>
            </Link>
         </div>
      </Card>
   );
};

export default ServiceCard;
