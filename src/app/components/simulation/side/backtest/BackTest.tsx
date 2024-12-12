import Button from '@/app/components/common/Button';
import Icons from '@/app/components/common/Icons';
import Input from '@/app/components/common/Input';
import { minusIcon, plusIcon } from '@/app/constants/iconPath';
import {
  BACKTEST_BTN_TEXT,
  BACKTEST_TEXT,
  ORDER_TYPE,
  SIDE_NAV_TYPES,
} from '@/app/constants/simulation';
import { useState } from 'react';

const BackTest = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [orderType, setOrderType] = useState('');
  const [orderCnt, setOrderSnt] = useState('');

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    if (!endDate || new Date(selectedDate) <= new Date(endDate)) {
      setStartDate(selectedDate);
    } else {
      alert('시작 날짜는 종료 날짜 이후로 지정할 수 없습니다.');
    }
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    if (!startDate || new Date(selectedDate) >= new Date(startDate)) {
      setEndDate(selectedDate);
    } else {
      alert('종료 날짜는 시작 날짜보다 이전으로 지정할 수 없습니다.');
    }
  };

  return (
    <div className="w-[260px] h-[628px] flex-col flex px-4 py-3.5 border border-gray-4 rounded-[10px] gap-y-5">
      {SIDE_NAV_TYPES[2]}
      <div className="flex mt-5 text-black-0 gap-x-4">
        <div className="flex flex-col gap-y-0.5">
          <p className="text-[13px] pl-1">{BACKTEST_TEXT[0]}</p>
          <Input
            inputType="date"
            type={'calendar'}
            textValue={startDate}
            onChange={handleStartDateChange}
          />
        </div>
        <div className="flex flex-col gap-y-0.5">
          <p className="text-[13px] pl-1">{BACKTEST_TEXT[1]}</p>
          <Input
            inputType="date"
            type={'calendar'}
            textValue={endDate || ''}
            onChange={handleEndDateChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-1 text-black-0 ">
        <p className="text-[13px] pl-1">{BACKTEST_TEXT[2]}</p>
        <div className="flex gap-x-2 text-xs font-medium">
          {ORDER_TYPE.map((type) => (
            <div
              key={type}
              onClick={() => setOrderType(type)}
              className={`rounded-lg  flex-center w-12 h-7 cursor-pointer ${orderType === type ? 'bg-main-1/90 text-white' : 'bg-white border-[1.5px] border-gray-2'}`}
            >
              {type}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-0.5 ">
        <p className="text-[13px] pl-1">{BACKTEST_TEXT[3]}</p>
        <div className="flex relative">
          <Input
            type={'orderCnt'}
            className="text-right outline-none"
            textValue={orderCnt}
            inputType="number"
            onChange={(e) => setOrderSnt(e.target.value)}
          />
          <p className="absolute right-12 top-1.5 text-sm text-gray-1">개</p>
          <Icons
            onClick={() => setOrderSnt((Number(orderCnt) + 1).toString())}
            className="absolute top-2 right-2 cursor-pointer"
            name={plusIcon}
          />
          <Icons
            onClick={() => setOrderSnt((Number(orderCnt) - 1).toString())}
            className="absolute top-2 right-6 cursor-pointer"
            name={minusIcon}
          />
        </div>
      </div>
      <div className="w-full flex-col-center">
        <Button
          buttonText={BACKTEST_BTN_TEXT[0]}
          type={'backTest'}
          className="bg-main-1"
          onClickHandler={() => console.log('실행')}
        />
        <div className="w-[100%] border-b border-b-gray-2 my-5" />
      </div>
    </div>
  );
};

export default BackTest;
