'use client';

import { useState } from 'react';

function TestContainer() {
  const [stockData, setStockData] = useState<any | null>(null);

  const callStock = async () => {
    try {
      const tokenData = await fetch('/api/stock', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(tokenData, '중간 데이터 타입 처리');

      const data = await tokenData.json();
      setStockData(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(stockData, '컨테이너에서 가져온 데이터');

  return (
    <div>
      <button
        className="w-[380px] h-[60px] bg-[#F95700] text-white"
        type="button"
        onClick={callStock}
      >
        api 가져오기
      </button>
      <div className="text-2xl">
        <p>{stockData?.output.bstp_kor_isnm}</p>
      </div>
    </div>
  );
}

export default TestContainer;
