import React from "react";

const Statistics = () => {
   return (
      <div className="hidden lg:flex justify-evenly items-center w-[65%] mx-auto bg-blue-50 px-3 py-9 rounded-md drop-shadow-lg absolute bottom-[-10%] left-[18%] right-[35%] z-[10]">
         <div className="text-start">
            <p className="font-bold">Total Customers</p>
            <h1 className="text-4xl font-extrabold">1.00K</h1>
            <small>10% more than last month</small>
         </div>
         <div className="text-start">
            <p className="font-bold">Total Reviews</p>
            <h1 className="text-4xl font-extrabold">500</h1>
            <small>3% more than last month</small>
         </div>
         <div className="text-start">
            <h1 className="text-4xl font-extrabold">90%</h1>
            <p className="font-bold">Tasks Done</p>
            <small>31 task remaining</small>
         </div>
      </div>
   );
};

export default Statistics;
