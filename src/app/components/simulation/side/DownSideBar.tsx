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
    slidesToShow: 3,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  return (
    <div className="w-[95%] h-10">
      <Slider {...settings}>
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
