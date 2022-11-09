import React, { useEffect, useState } from "react";
import useSetTitle from "../../../hooks/useSetTitle";
import ServiceCard from "../../Shared/ServiceCard/ServiceCard";

const Services = () => {
   const [services, setServices] = useState([]);

   useSetTitle("Services");

   useEffect(() => {
      fetch("http://localhost:5000/services")
         .then((res) => res.json())
         .then((data) => setServices(data));
   }, []);

   return (
      <div className="max-w-[1320px] w-[95%] mx-auto my-5">
         <h1 className="text-3xl font-bold uppercase mb-4">All Services</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((service) => (
               <ServiceCard key={service._id} service={service} />
            ))}
         </div>
      </div>
   );
};

export default Services;
