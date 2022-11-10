import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../Shared/ServiceCard/ServiceCard";

const LatestServices = () => {
   const [services, setServices] = useState([]);
   useEffect(() => {
      fetch("http://localhost:5000/services?size=3")
         .then((res) => res.json())
         .then((data) => setServices(data.services));
   }, []);
   return (
      <div className="max-w-[1320px] w-[95%] mx-auto mt-[150px]">
         <div className="text-center mb-10">
            <h1 className="text-3xl font-extrabold uppercase my-4">New Services</h1>
            <p className="w-[40%] mx-auto">
               I always bring new service every month. I have more than 6 services. Visit service
               page to checkout all of them.
            </p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((service) => (
               <ServiceCard key={service._id} service={service} />
            ))}
         </div>
         <div className="mt-5 flex justify-center">
            <Link to="/services">
               <Button>See All Services</Button>
            </Link>
         </div>
      </div>
   );
};

export default LatestServices;
