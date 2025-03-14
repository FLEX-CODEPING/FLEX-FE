import Icons from '@/app/components/common/Icons';
import { fillter } from '@/app/constants/iconPath';
import { FINANCIALINTO_VIEWTYPE } from '@/app/constants/simulation';
import { Dispatch, SetStateAction, useState } from 'react';

interface FinancialViewDropdownProps {
  option: string;
  setOption: Dispatch<SetStateAction<string>>;
}

const FinancialViewDropdown = ({
  option,
  setOption,
}: FinancialViewDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectValue = (viewType: string) => {
    setOption(viewType);
    setIsOpen(false);
  };

  const toggleFilterDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex text-xs">
      <div
        className="flex justify-between cursor-pointer w-16 h-7 items-center px-2 py-0.5  rounded border bg-white border-gray-300 box-border"
        onClick={toggleFilterDropdown}
      >
        <div className="text-black-1">{option}</div>
        <Icons name={fillter} />
      </div>
      {isOpen && (
        <div className="absolute w-16 flex flex-col px-1.5 py-1.5 gap-y-1 top-7 bg-white border border-gray-2 rounded z-10">
          {FINANCIALINTO_VIEWTYPE.map((type, i) => (
            <div
              key={type}
              className="w-full flex px-1 py-1 hover:bg-gray-3 text-black-1 hover:text-black-0 cursor-pointer rounded"
              onClick={() => handleSelectValue(type)}
            >
              {type}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FinancialViewDropdown;
