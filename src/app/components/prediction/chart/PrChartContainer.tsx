'use client';

import React from 'react';
import PrChart from './PrChart'; 

const PrChartContainer = () => {
  return (
    <div className="flex w-full px-10 py-5 rounded-[10px] border border-gray-4 flex-col justify-start items-start">
      <div className="w-full">
        <PrChart />
      </div>
    </div>
  );
};

export default PrChartContainer;
