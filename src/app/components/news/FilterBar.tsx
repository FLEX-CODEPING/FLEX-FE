import React from 'react';

const FilterBar = () => {
  const filters = ['국내주식', '해외주식', '크립토', '선물', 'ETF', '정치', '경제', '환율', '부동산', '지수'];

  return (
    <div className="flex justify-center gap-4">
      {filters.map((filter, index) => (
        <button key={index} className="px-4 py-2 bg-gray-200 rounded-lg">
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
