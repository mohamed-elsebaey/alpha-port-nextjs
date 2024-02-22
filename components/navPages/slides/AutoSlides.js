"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { images } from "@/lib/images";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AutoSlides() {
  return (
    <section data-aos="zoom-in" data-aos-duration="500" className="py-12">
      <div className="w-5/6  m-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-[500px] shadow-xl rounded-xl"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="px-20 pb-20 pt-10 min-h-full min-w-full flex flex-col xl:flex-row ">
                <div className="w-[60%] min-h-full rounded-md">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4  text-center w-[40%] flex flex-col items-center justify-center ">
                  <h1 className="text-2xl font-bold  ">Text</h1>
                  <p className="text-md font-cairo ">Text</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
