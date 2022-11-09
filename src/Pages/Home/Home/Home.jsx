import React from "react";
import useSetTitle from "../../../hooks/useSetTitle";
import Banner from "../Banner/Banner";

const Home = () => {
   useSetTitle("Home");
   return (
      <div>
         <Banner />
      </div>
   );
};

export default Home;
