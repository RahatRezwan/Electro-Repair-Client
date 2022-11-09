import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Autoplay } from "swiper";
const Banner = () => {
   return (
      <Swiper
         slidesPerView={1}
         spaceBetween={20}
         autoplay={true}
         loop={true}
         keyboard={{
            enabled: true,
         }}
         pagination={{
            clickable: true,
         }}
         modules={[Keyboard, Pagination, Autoplay]}
         className="mySwiper w-full m-0 p-0"
      >
         {/* slide 1 */}
         <SwiperSlide className="m-0 p-0">
            <div
               className="w-full mx-aut0 h-[700px] bg-cover bg-no-repeat bg-center flex justify-center items-center"
               style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.63) 0%, rgba(0, 0, 0, 0.7) 100%), url('https://i.ibb.co/6ytL4Rg/cover1.jpg')`,
               }}
            >
               <div className="text-center text-white">
                  <h1 className="text-4xl lg:text-6xl text-white font-extrabold uppercase">
                     World Class Smartphone Repair
                  </h1>
                  <p className="mt-4 w-[60%] mx-auto text-[20px] font-thin">
                     If you looking for a world class device repair service the you are in the right
                     place. I am a certified repairman. I will provide you the best repair service
                     for your device.
                  </p>
               </div>
            </div>
         </SwiperSlide>

         {/* slide 2 */}
         <SwiperSlide className="m-0 p-0">
            <div
               className="w-full mx-aut0 min-h-[500px] h-[700px] bg-cover bg-no-repeat bg-center flex justify-center items-center"
               style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.63) 0%, rgba(0, 0, 0, 0.7) 100%), url('https://i.ibb.co/WxRk18f/cover2.jpg')`,
               }}
            >
               <div className="text-center text-white">
                  <h1 className="text-4xl lg:text-6xl text-white font-extrabold uppercase">
                     World Class Laptop Repair
                  </h1>
                  <p className="mt-4 w-[60%] mx-auto text-[20px] font-thin">
                     If you looking for a world class device repair service the you are in the right
                     place. I am a certified repairman. I will provide you the best repair service
                     for your device.
                  </p>
               </div>
            </div>
         </SwiperSlide>
      </Swiper>
   );
};

export default Banner;
