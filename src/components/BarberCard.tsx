import { IBarberia } from "@/interfaces/IBarberia";
import Rating from "./Rating";
import { IoLocationOutline, IoTicket } from "react-icons/io5";
import { FaEye } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useNavigate } from "react-router-dom";

const BarberCard = ({ barberia }: { barberia: IBarberia }) => {
  const navigate = useNavigate();

  const redirectToBarberia = (id: string) => {
    navigate(`/barberias/${id}`);
  };
  return (
    <div className="w-10/12 md:w-[300px] h-[35vh] md:h-[42vh]  rounded-xl shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 mx-auto md:mx-0">
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{
            clickable: true,
          }}
          style={
            {
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
              "--swiper-navigation-size": "23px",
            } as React.CSSProperties
          }
        >
          {[
            barberia.banner_url,
            "https://via.placeholder.com/200",
            "https://via.placeholder.com/150",
          ].map((url, index) => (
            <SwiperSlide key={index}>
              <img
                src={url}
                alt="Slide 1"
                className="w-full h-[15vh] md:h-[20vh] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex h-[50%] gap-1 px-4 py-1 bg-[#cfcece30] rounded-b-xl  ">
        <div className="w-4/5 gap-2">
          <h2 className="text-xl text-black font-semibold">{barberia.name}</h2>
          <div className="flex items-center text-black">
            <IoLocationOutline className="mr-2 text-red-600 text-xl" />
            <span className="text-gray-500 font-light">
              {barberia.ciudad}, {barberia.departamento}
            </span>
          </div>
          <div className="flex flex-row gap-2 text-yellow-400">
            4.5 <Rating rating={4.2} /> (100)
          </div>
          <div className="flex flex-row flex-wrap gap-2 ">
            <div className="text-sm bg-white px-3 py-1 rounded-xl text-gray-800">
              Cabello
            </div>
            <div className="text-sm bg-white px-3 py-1 rounded-xl text-gray-800">
              Cejas
            </div>
            <div className="text-sm bg-white px-3 py-1 rounded-xl text-gray-800">
              Barba
            </div>
          </div>
        </div>
        <div className="w-1/5 flex flex-col items-center justify-center gap-2">
          <button
            className="bg-purple-700 text-white px-2 py-1 rounded-full w-[6vh] h-[6vh] flex items-center justify-center text-4xl hover:scale-125"
            onClick={() => redirectToBarberia(barberia.id)}
          >
            <FaEye />
          </button>
          <button className="bg-purple-700 text-white px-2 py-1 rounded-full w-[6vh] h-[6vh] flex items-center justify-center text-4xl hover:scale-125">
            <IoTicket />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BarberCard;
