import React, { useState } from 'react';
import { AGE_OPTIONS, SALARY_OPTIONS } from '@/app/constants/blogconstants'; 
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
    <div className="w-full flex-col space-y-4 mt-9">
      <div className="flex items-start space-x-8 ml-[68px] ">
        <div className="border-[#F95700] bg-white flex justify-center mr-5; items-center border rounded-[20px] h-[40px] px-[20px] py-[1px]">
          <Icons name={age} />
          <h3 className="font-semibold text-[12px]">나이</h3>
          <div className="flex gap-[17px] justify-center  text-[12px] ">
            {AGE_OPTIONS.map((age) => (
              <button
                key={age}
                className={`px-4 py-1 rounded-full border ${
                  selectedAges.includes(age)
                    ? 'bg-[#FFEBE0] border-white'
                    : 'bg-white border-white'
                }`}
                onClick={() => handleAgeClick(age)}
              >
                {age}
              </button>
            ))}
          </div>
        </div>

        <div className=" px-5 py-[5px] bg-white  justify-center mr-5 flex items-center gap-2.5 border border-[#F95700] rounded-full h-10">
          <Icons name={salary} />
          <h3 className="font-semibold text-[12px]">급여</h3>
          <div className="flex gap-[17px] text-[12px]">
            {SALARY_OPTIONS.map((salary) => (
              <button
                key={salary}
                className={` px-4 py-1 border-[#F95700] rounded-full cursor-pointer font-normal transition-colors duration-300 ease-in-out  border ${
                  selectedSalaries.includes(salary)
                    ? 'bg-[#FFEBE0] border-white'
                    : 'bg-white border-white'
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
