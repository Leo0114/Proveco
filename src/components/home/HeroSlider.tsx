import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import "@styles/global.css";

export type SliderHero = {
  title?: string;
  description?: string;
  image: string;
  buttonName?: string;
  buttonPath?: string;
  position?: "start" | "end";
};

interface HeroSliderProps {
  slides: SliderHero[];
}

const HeroSlider = ({ slides }: HeroSliderProps) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="relative w-full aspect-video h-[75vh]  md:h-[100vh] group">
      <Swiper
        onSwiper={setSwiper}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 5000 }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-black/30 z-10" />
              <img
                src={slide.image}
                alt={slide.title || "Hero image"}
                className="w-full h-full object-cover object-center"
                loading="eager"
                decoding="async"
              />
              <div
                className={`max-w-screen-xl mx-auto px-8 md:px-10 py-4 absolute inset-0 z-20 flex  lg:py-8  ${
                  slide.position === "end"
                    ? " md:justify-end md:text-end text-center items-center justify-center"
                    : "text-center items-center justify-center  md:justify-start md:text-start"
                }`}
              >
                <div className="max-w-2xl space-y-4 animate-fade-in-up relative">
                  <div className="p-6 md:p-8 rounded-xl">
                    {slide.title && (
                      <h1 className="text-4xl md:text-5xl text-primary lg:text-7xl font-bold [--animation-delay:100ms] leading-tight md:leading-tighter">
                        {slide.title}
                      </h1>
                    )}
                    {slide.description && (
                      <p className="text-lg md:text-xl text-slate-300 mt-4 [--animation-delay:200ms] leading-relaxed max-w-2xl">
                        {slide.description}
                      </p>
                    )}
                    {slide.buttonName && (
                      <a
                        href={slide.buttonPath || "#"}
                        className="button-primary mt-6 [--animation-delay:300ms] inline-block hover:scale-105 transition-transform"
                      >
                        {slide.buttonName}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div
          className="swiper-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex justify-center gap-2"
          aria-label="Control de paginación"
        />
      </Swiper>
    </div>
  );
};

export default HeroSlider;
