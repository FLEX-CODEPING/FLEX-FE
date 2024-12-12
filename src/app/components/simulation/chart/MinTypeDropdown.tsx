import Icons from '@/app/components/common/Icons';
import { fillter } from '@/app/constants/iconPath';
import { CHART_MIN_NUM, CHART_VIEWTYPE } from '@/app/constants/simulation';
import { Dispatch, SetStateAction, useState } from 'react';

interface MinTypeDropdownProps {
  option: number | string;
  setOption: Dispatch<SetStateAction<number | string>>;
}

const MinTypeDropdown = ({ option, setOption }: MinTypeDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectValue = (type: string | number) => {
    setOption(type);
    setIsOpen(false);
  };

  const toggleFilterDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex text-[13px] h-7 cursor-pointer gap-x-2">
      <div
        className={`flex justify-between w-[60px] items-center px-1 py-0.5  rounded  ${typeof option === 'number' ? 'bg-gray-5' : 'bg-white border border-gray-2 box-border'}`}
        onClick={toggleFilterDropdown}
      >
        <div className="text-black-1">
          {typeof option !== 'number' ? 1 : option}분
        </div>
        <Icons name={fillter} />
      </div>
      {isOpen && (
        <div className="absolute w-[80px] top-8 py-1 bg-white border border-gray-2 rounded z-10">
          {CHART_MIN_NUM.map((minType, i) => (
            <div className="w-full flex-center">
              <div
                key={minType}
                className={`w-[90%] h-[95%] flex px-2 py-2 hover:bg-gray-100 rounded  cursor-pointer`}
                onClick={() => handleSelectValue(minType)}
              >
                {minType}분
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex gap-x-1">
        {CHART_VIEWTYPE.map((dayType) => (
          <div
            key={dayType}
            onClick={() => handleSelectValue(dayType)}
            className={`flex-center w-7 h-7 rounded hover:bg-gray-5 text-black-1 ${option === dayType && 'bg-gray-5'}`}
          >
            {dayType}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MinTypeDropdown;
