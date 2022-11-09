import React from "react";
import useSetTitle from "../../../hooks/useSetTitle";
import Banner from "../Banner/Banner";
import LatestServices from "../LatestServices/LatestServices";

const Home = () => {
   useSetTitle("Home");
   return (
      <div>
         <Banner />
         <LatestServices />
      </div>
   );
};

export default Home;
