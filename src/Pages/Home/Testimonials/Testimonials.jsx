import React, { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Avatar } from "flowbite-react";

const Testimonials = () => {
   const [reviews, setReviews] = useState([]);
   useEffect(() => {
      fetch("https://electro-repair-server.vercel.app/reviews?limit=5")
         .then((res) => res.json())
         .then((data) => setReviews(data));
   }, []);
   return (
      <div className="max-w-[1280px]  mx-auto">
         <div className="text-center mt-24 mb-10">
            <h1 className="text-3xl font-extrabold uppercase my-4">Testimonials</h1>
            <p className="w-[40%] mx-auto">
               Check the top review and See what my customers say about my service.
            </p>
         </div>
         <Swiper
            slidesPerView={1}
            spaceBetween={8}
            loop={true}
            autoplay={{
               delay: 2000,
               disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper w-[60%]"
         >
            {reviews.map((review) => (
               <SwiperSlide key={review._id}>
                  <div className="border-2 border-orange-200 rounded-md shadow-md drop-shadow-sm p-10 text-center">
                     <Avatar img={review.userPhoto} rounded={true} size="lg" className="mb-2" />
                     <h4 className="text-2xl font-bold mb-2">{review.userName}</h4>
                     <p className="text-[17px]">{review.comment}</p>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default Testimonials;
