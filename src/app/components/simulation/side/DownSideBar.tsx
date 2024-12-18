'use client';

import { MARKET_CONDITIONS } from '@/app/data/simulation';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import DownSideItem from './DownSideItem';

export default function DownSideBar() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: 'linear',
  };
  return (
    <div className="w-[100%] h-10 flex fixed bottom-0 dark:bg-black-0/90">
      <Slider
        {...settings}
        className="w-full px-4 bg-[#fdfafa] dark:bg-black-0/90 flex items-center dark:text-gray-3 dark:border-t dark:border-t-gray-1"
      >
        {MARKET_CONDITIONS.map((data, index) => (
          <DownSideItem
            key={data.title}
            title={data.title}
            value={data.value}
            difference={data.difference}
            differenceRate={data.differenceRate}
          />
        ))}
      </Slider>
    </div>
  );
}
