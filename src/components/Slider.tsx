import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { DEVICE_BREAKPOINT } from "../utils/devicesBreakpoint";
import "swiper/swiper-bundle.css";

import { partnersImages } from "../data/partnersImages";

export function Slider() {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        navigation
        loop
        style={
          {
            // @ts-ignore
            "--swiper-navigation-size": "25px",
          } as any
        }
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        breakpoints={{
          [parseInt(DEVICE_BREAKPOINT.XS)]: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          [parseInt(DEVICE_BREAKPOINT.SM)]: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          [parseInt(DEVICE_BREAKPOINT.MD)]: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          [parseInt(DEVICE_BREAKPOINT.LG)]: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          [parseInt(DEVICE_BREAKPOINT.XL)]: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {partnersImages.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img className="w-48 max-h-16" src={item.pathImage} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
