'use client';

import { MARKET_CONDITIONS } from '@/app/data/simulation';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import DownSideItem from './DownSideItem';

export default function DownSideBar() {
  return (
    <div className="w-full h-10 fixed bottom-0 dark:bg-black-0/90">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        loopAdditionalSlides={5}
        autoplay={{
          delay: 10,
          disableOnInteraction: false,
        }}
        speed={3000}
      >
        {MARKET_CONDITIONS.map((data, index) => (
          <SwiperSlide key={data.title} className="w-auto flex items-center">
            <DownSideItem
              title={data.title}
              value={data.value}
              difference={data.difference}
              differenceRate={data.differenceRate}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
