import React, { useEffect, useState } from "react";
import { Button, Label, Select } from "flowbite-react";
import useSetTitle from "../../../hooks/useSetTitle";
import ServiceCard from "../../Shared/ServiceCard/ServiceCard";
import Spinner from "../../Shared/Spinner/Spinner";

const Services = () => {
   const [services, setServices] = useState([]);
   const [spin, setSpin] = useState(true);
   /* pagination */
   const [count, setCount] = useState(0);
   const [perPageSize, setPerPageSize] = useState(3);
   const [currentPage, setCurrentPage] = useState(0);

   const totalPages = Math.ceil(count / perPageSize);

   useSetTitle("Services");

   useEffect(() => {
      fetch(
         `https://electro-repair-server.vercel.app/services?currentPage=${currentPage}&size=${perPageSize}`,
      )
         .then((res) => res.json())
         .then((data) => {
            setServices(data.services);
            setCount(data.count);
            setSpin(false);
         });
   }, [currentPage, perPageSize]);

   if (spin) {
      return <Spinner />;
   }

   return (
      <div className="max-w-[1320px] w-[95%] mx-auto my-5">
         <h1 className="text-3xl font-bold uppercase mb-4">All Services</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((service) => (
               <ServiceCard key={service._id} service={service} />
            ))}
         </div>

         {/* pagination */}
         <div className="mx-auto flex gap-2 my-5 justify-center">
            {[...Array(totalPages).keys()].map((number, i) => (
               <>
                  <Button key={number + i} onClick={() => setCurrentPage(number)}>
                     {number + 1}
                  </Button>
               </>
            ))}
            <div id="option" className="w-auto flex flex-row-reverse items-center gap-2 ml-5">
               <div className="mb-2 block">
                  <Label htmlFor="options" value="Filter" />
               </div>
               <Select
                  id="option"
                  required={true}
                  onChange={(event) => setPerPageSize(event.target.value)}
                  className="w-14"
               >
                  <option>3</option>
                  <option>6</option>
                  <option>9</option>
               </Select>
            </div>
         </div>
      </div>
   );
};

export default Services;
