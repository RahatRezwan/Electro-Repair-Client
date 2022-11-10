import React from "react";
import useSetTitle from "../../../hooks/useSetTitle";
import Banner from "../Banner/Banner";
import LatestBlogs from "../LatestBlogs/LatestBlogs";
import LatestServices from "../LatestServices/LatestServices";
import Testimonials from "../Testimonials/Testimonials";
import WhyMe from "../WhyMe/WhyMe";

const Home = () => {
   useSetTitle("Home");
   return (
      <div>
         <Banner />
         <LatestServices />
         <WhyMe />
         <LatestBlogs />
         <Testimonials />
      </div>
   );
};

export default Home;
