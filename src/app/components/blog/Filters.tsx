import React, { useState } from 'react';
import { AGE_OPTIONS, SALARY_OPTIONS } from '@/app/constants/BlogConstants'; // 상수 불러오기
import Image from 'next/image';

const Filters = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedAges, setSelectedAges] = useState<string[]>([]);
  const [selectedSalaries, setSelectedSalaries] = useState<string[]>([]);

  // 나이 필터 클릭 핸들러
  const handleAgeClick = (age: string) => {
    setSelectedAges(prev =>
      prev.includes(age) ? prev.filter(a => a !== age) : [...prev, age]
    );
  };

  // 급여 필터 클릭 핸들러
  const handleSalaryClick = (salary: string) => {
    setSelectedSalaries(prev =>
      prev.includes(salary) ? prev.filter(s => s !== salary) : [...prev, salary]
    );
  };

  // 필터 드롭다운 토글
  const toggleFilterDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  return (
    <div className="w-full flex flex-col items-center space-y-4">
      <div className="flex justify-center items-start space-x-8">
        {/* 나이 필터 섹션 */}
        <div className="flex items-center gap-4 border border-orange-400 rounded-full p-4">
          <Image
            src="/images/age.png"
            alt="ageImg"
            width={18}
            height={18}
          />
          <h3 className="font-semibold">나이</h3>
          <div className="flex gap-2">
            {AGE_OPTIONS.map((age) => (
              <button
                key={age}
                className={`px-4 py-2 rounded-full border transition-colors duration-300 ease-in-out ${
                  selectedAges.includes(age)
                    ? 'bg-orange-200 border-orange-400'
                    : 'bg-white border-gray-300'
                }`}
                onClick={() => handleAgeClick(age)}
              >
                {age}
              </button>
            ))}
          </div>
        </div>

        {/* 급여 필터 섹션 */}
        <div className="flex items-center gap-4 border border-orange-400 rounded-full p-4">
          <Image
            src="/images/salary.png"
            alt="salaryImg"
            width={18}
            height={18}
          />
          <h3 className="font-semibold">급여</h3>
          <div className="flex gap-2">
            {SALARY_OPTIONS.map((salary) => (
              <button
                key={salary}
                className={`px-4 py-2 rounded-full border transition-colors duration-300 ease-in-out ${
                  selectedSalaries.includes(salary)
                    ? 'bg-orange-200 border-orange-400'
                    : 'bg-white border-gray-300'
                }`}
                onClick={() => handleSalaryClick(salary)}
              >
                {salary}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 검색 필터 드롭다운 */}
      <div className="relative">
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded-full"
          onClick={toggleFilterDropdown}
        >
          검색 필터
        </button>
        {dropdownOpen && (
          <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
              인기순
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
              추천순
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
