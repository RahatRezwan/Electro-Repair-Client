import React from "react";
import whyMe from "../../../assests/whyme.png";
import { GoArrowRight } from "react-icons/go";

const WhyMe = () => {
   return (
      <div className="max-w-[1300px] mx-auto flex justify-between items-center my-24">
         <div className="w-1/2">
            <img src={whyMe} alt="" />
         </div>
         <div className="w-1/2">
            <h1 className="text-4xl font-extrabold mb-4">Why Me?</h1>
            <p className="mb-3">
               I know that thare a lot of servicemen out there. But only few of them are expert. You
               can choose me for many reasons.
            </p>
            <div className="flex items-center gap-1 mb-1">
               <GoArrowRight className="text-blue-600 text-2xl" />
               <p className="text-xl font-bold">Certified Serviceman</p>
            </div>
            <div className="flex items-center gap-1 mb-1">
               <GoArrowRight className="text-blue-600 text-2xl" />
               <p className="text-xl font-bold">Provide 100% Genuine Product</p>
            </div>
            <div className="flex items-center gap-1 mb-1">
               <GoArrowRight className="text-blue-600 text-2xl" />
               <p className="text-xl font-bold">100% Customer Satisfaction</p>
            </div>
            <div className="flex items-center gap-1 mb-1">
               <GoArrowRight className="text-blue-600 text-2xl" />
               <p className="text-xl font-bold">Years of Experience</p>
            </div>
            <div className="flex items-center gap-1 mb-1">
               <GoArrowRight className="text-blue-600 text-2xl" />
               <p className="text-xl font-bold">Thousands of Positive Reviews</p>
            </div>
         </div>
      </div>
   );
};

export default WhyMe;
