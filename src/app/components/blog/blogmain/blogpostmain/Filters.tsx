import React, { useState, BaseSyntheticEvent } from 'react';
import { AGE_OPTIONS, SALARY_OPTIONS } from '@/app/constants/BlogConstants'; 
import Icons from '@/app/components/common/Icons';
import { age, salary } from '@/app/constants/iconPath';

const Filters = () => {
  const [selectedAges, setSelectedAges] = useState<string[]>([]);
  const [selectedSalaries, setSelectedSalaries] = useState<string[]>([]);

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




  return (
    <div className="w-full flex-col space-y-4 mt-[36px]">
      <div className="flex items-start space-x-8 ml-[68px] ">
        
        <div className="age-filter-container flex gap-2.5 items-center border border-orange-400 rounded-[20px] h-[40px] px-[20px] py-[1px]">
          <Icons name={age} />
          <h3 className="font-semibold text-[12px]">나이</h3>
          <div className="filter-options flex gap-2 text-[12px] ">
            {AGE_OPTIONS.map((age) => (
              <button
                key={age}
                className={`filter-button px-4 py-1 rounded-full border ${
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

        
        <div className="salary-filter-container flex items-center gap-2.5 border border-orange-400 rounded-full h-10">
          <Icons name={salary} />
          <h3 className="font-semibold text-[12px]">급여</h3>
          <div className="filter-options flex gap-[17px] text-[12px]">
            {SALARY_OPTIONS.map((salary) => (
              <button
                key={salary}
                className={`filter-button px-4 py-1 rounded-full border ${
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

      
    </div>
  );
};

export default Filters;
