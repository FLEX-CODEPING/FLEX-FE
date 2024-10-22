'use client';

import { useState } from 'react';

function TestContainer() {
  const [stockData, setStockData] = useState<any | null>(null);
  const [stockMinData, setStockMinData] = useState<any | null>(null);

  const callStock = async () => {
    try {
      const tokenData = await fetch('/api/stock', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await tokenData.json();
      setStockData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const callStockMin = async () => {
    try {
      const minData = await fetch('/api/stock/min', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await minData.json();
      setStockMinData(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-y-5">
      <button
        className="w-[380px] h-[60px] bg-[#F95700] text-white"
        type="button"
        onClick={callStock}
      >
        api 가져오기
      </button>
      <button
        className="w-[380px] h-[60px] bg-[#F95700] text-white"
        type="button"
        onClick={callStockMin}
      >
        stockMinData 가져오기
      </button>
      <div className="text-2xl">
        <p>기본 데이터 : {stockData?.output.bstp_kor_isnm}</p>
      </div>
      <div className="text-2xl">
        <p>분봉데이터 : {stockMinData?.output2}</p>
      </div>
    </div>
  );
}

export default TestContainer;
