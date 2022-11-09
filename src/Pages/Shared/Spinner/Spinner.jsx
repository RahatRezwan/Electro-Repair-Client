import React from "react";
import spinner from "../../../assests/spinner.png";
const Spinner = () => {
   return (
      <div className="min-h-screen w-full flex justify-center items-center">
         <img src={spinner} alt="" className="animate-spin w-[100px] h-[100px]" />
      </div>
   );
};

export default Spinner;
