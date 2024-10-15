'use client';

import { searchStock, stockLike } from '@/app/constants/iconPath';
import { SEARCH_STOCK } from '@/app/constants/simulation';
import Image from 'next/image';
import { useState } from 'react';
import Icons from '../../common/Icons';
import Input from '../../common/Input';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <div className="flex w-full justify-between items-end pb-3 ">
      <div className="flex px-[15.5px] justify-between w-[360px] items-end">
        <div className="flex gap-x-2.5">
          <div className="w-[40px] h-[40px] relative">
            <Image
              src="/Images/samsung.png"
              alt="stockImg"
              layout="fill"
              objectFit="cover"
              className="rounded-[18px]"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex gap-x-1 items-end">
              <p className="text-sm font-bold">삼성전자</p>
              <p className="text-xs font-normal">005930</p>
            </div>
            <p className="text-base font-medium">75520원</p>
          </div>
        </div>
        <div className="flex gap-x-1 text-red-1 text-xs items-center">
          <p>+2200</p>
          <p>(3.72%)</p>
          <Icons name={stockLike} className="ml-2 cursor-pointer" />
        </div>
      </div>
      <div className="flex relative">
        <Input
          type="simulation"
          placeholder={SEARCH_STOCK}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Icons name={searchStock} className="absolute right-5 top-2" />
      </div>
    </div>
  );
};

export default SearchBar;
