import { BaseSyntheticEvent, useState } from "react";
import Icons from "../../../common/Icons";
import { fillter } from "@/app/constants/iconPath";

const ViewTypeDropDown = () => {
    const options = ["최신순", "오래된순", "좋아요순", "조회수순"];
  const [selectedOption, setSelectedOption] = useState("검색필터");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const replaceValue = {
    정렬: [
      { view: "최신순", replace: "newest" },
      { view: "오래된순", replace: "oldest" },
      { view: "좋아요순", replace: "mostlike" },
      { view: "조회수순", replace: "mostview" },
    ],
  };

  const handleSelectValue = (e: BaseSyntheticEvent) => {
    const current = e.target.getAttribute("value");
    setSelectedOption(current);  
    setDropdownOpen(false);
  };

  const toggleFilterDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

    return (
        <div className="relative flex text-sm">
        <button
          className="flex w-[119px] h-[30px] items-center px-4 py-[10px]  rounded-[5px] border bg-white border-gray-300"
          onClick={toggleFilterDropdown}
          
        >
          <span className="mr-4">{selectedOption}</span>
          <Icons name={fillter} />
        </button>
        {dropdownOpen && (
          <div
            className="absolute w-[119px] top-[30px] bg-white border border-gray-300 rounded-[5px] shadow-lg z-10"
            
          >
            {options.map(option => (
              <button
                key={option}
                value={option}
                className="w-full text-left px-4 py-1 hover:bg-gray-100"
                onClick={handleSelectValue}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    );
};

export default ViewTypeDropDown;