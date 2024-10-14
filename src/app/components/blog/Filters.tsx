import React, { useState, BaseSyntheticEvent } from 'react';
import { AGE_OPTIONS, SALARY_OPTIONS } from '@/app/constants/BlogConstants'; 
import Image from 'next/image';

const Filters = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedAges, setSelectedAges] = useState<string[]>([]);
  const [selectedSalaries, setSelectedSalaries] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState("검색필터");

  const handleAgeClick = (age: string) => {
    setSelectedAges(prev =>
      prev.includes(age) ? prev.filter(a => a !== age) : [...prev, age]
    );
  };

  const handleSalaryClick = (salary: string) => {
    setSelectedSalaries(prev =>
      prev.includes(salary) ? prev.filter(s => s !== salary) : [...prev, salary]
    );
  };

  const toggleFilterDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const replaceValue = {
    정렬: [
      { view: "최신순", replace: "newest" },
      { view: "오래된순", replace: "oldest" },
      { view: "좋아요순", replace: "mostlike" },
      { view: "조회수순", replace: "mostview" },
    ],
  };

  const options = ["최신순", "오래된순", "좋아요순", "조회수순"];

  const handleSelectValue = (e: BaseSyntheticEvent) => {
    const current = e.target.getAttribute("value");
    setSelectedOption(current);  

   
    
    setDropdownOpen(false);
  };

  return (
    <div className="w-full flex-center flex-col space-y-4">
      <div className="filter-section flex justify-center items-start space-x-8">
        
        <div className="age-filter-container flex gap-2.5 items-center border border-orange-400 rounded-full">
          <Image
            src="/images/age.png"
            alt="ageImg"
            width={18}
            height={18}
          />
          <h3 className="font-semibold">나이</h3>
          <div className="filter-options flex gap-2">
            {AGE_OPTIONS.map((age) => (
              <button
                key={age}
                className={`filter-button px-4 rounded-full border ${
                  selectedAges.includes(age)
                    ? 'bg-[#FFEBE0] border-[#ffffff]'
                    : 'bg-white border-[#ffffff]'
                }`}
                onClick={() => handleAgeClick(age)}
              >
                {age}
              </button>
            ))}
          </div>
        </div>

        <div className="salary-filter-container flex items-center gap-4 border border-orange-400 rounded-full p-4">
          <Image
            src="/images/salary.png"
            alt="salaryImg"
            width={18}
            height={18}
          />
          <h3 className="font-semibold">급여</h3>
          <div className="filter-options flex gap-2">
            {SALARY_OPTIONS.map((salary) => (
              <button
                key={salary}
                className={`filter-button px-4 py-0 rounded-full border ${
                  selectedSalaries.includes(salary)
                    ? 'bg-[#FFEBE0] border-[#ffffff]'
                    : 'bg-white border-[#ffffff]'
                }`}
                onClick={() => handleSalaryClick(salary)}
              >
                {salary}
              </button>
            ))}
          </div>
        </div>
      </div>

      
      <div className="relative-container relative">
        <button
          className="filter-dropdown-button px-4 py-2 rounded-full border bg-white border-gray-300"
          onClick={toggleFilterDropdown}
          style={{ top: '-150px', left: '720px',  }}  
        >
          {selectedOption}  
        </button>
        {dropdownOpen && (
          <div
            className="dropdown-menu absolute bg-white border border-gray-300 rounded-md shadow-lg z-10"
          style={{ top: '-105px', left: '720px',  }}  
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
    </div>
  );
};

export default Filters;
