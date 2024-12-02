'use client';

import React from 'react';
import PrChart from './PrChart'; // 수정된 PrChart 컴포넌트

const PrChartContainer = () => {
  return (
    <div className="flex w-full px-10 py-5 rounded-[10px] border border-gray-4 flex-col justify-start items-start">
      <div className="w-full">
        {/* PrChart 컴포넌트만 렌더링 */}
        <PrChart />
      </div>
    </div>
  );
};

export default PrChartContainer;
