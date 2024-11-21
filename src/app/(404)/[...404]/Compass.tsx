'use client';

import Icons from '@/app/components/common/Icons';
import { needleIcon } from '@/app/constants/iconPath';
import Link from 'next/link';
import { useState } from 'react';

const Compass = () => {
  const [angle, setAngle] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const compass = e.currentTarget.getBoundingClientRect();
    const centerX = compass.left + compass.width / 2;
    const centerY = compass.top + compass.height / 2;
    const radians = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    const degrees = radians * (180 / Math.PI) + 90;
    setAngle(degrees);
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <div className="relative w-[360px] h-[360px] rounded-full border-[5px] border-gray-700 bg-white shadow-2xl text-gray-700 font-medium text-xl">
        <div
          className="absolute top-[112px] left-[112px] flex origin-center transform"
          style={{ rotate: `${angle}deg` }}
        >
          <Icons name={needleIcon} />
        </div>
        <Link
          href="/"
          className="absolute top-5 left-1/2 transform -translate-x-1/2"
        >
          홈
        </Link>
        <Link
          href="auth"
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
        >
          로그인
        </Link>
        <Link
          href="/blog"
          className="absolute top-1/2 left-5 transform -translate-y-1/2"
        >
          블로그
        </Link>
        <Link
          href="/simulate"
          className="absolute top-1/2 right-5 transform -translate-y-1/2"
        >
          모의투자
        </Link>
      </div>
    </div>
  );
};

export default Compass;
