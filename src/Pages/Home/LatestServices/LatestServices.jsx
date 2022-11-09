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
      <div className="max-w-[1320px] w-[95%] mx-auto my-5">
         <h1 className="text-3xl font-bold uppercase mb-4">New Services</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((service) => (
               <ServiceCard key={service._id} service={service} />
            ))}
         </div>
         <Link to="/services">
            <Button>See All</Button>
         </Link>
      </div>
   );
};

export default LatestServices;
