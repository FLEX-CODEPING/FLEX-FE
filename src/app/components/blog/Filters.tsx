import React, { useState } from 'react';
import { AGE_OPTIONS, SALARY_OPTIONS } from '@/app/constants/BlogConstants'; // 상수 불러오기

const Filters = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedAges, setSelectedAges] = useState<string[]>([]);
  const [selectedSalaries, setSelectedSalaries] = useState<string[]>([]);

  const handleAgeClick = (age: string) => {
    setSelectedAges(prev => prev.includes(age) ? prev.filter(a => a !== age) : [...prev, age]);
  };

  const handleSalaryClick = (salary: string) => {
    setSelectedSalaries(prev => prev.includes(salary) ? prev.filter(s => s !== salary) : [...prev, salary]);
  };

  const toggleFilterDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  return (
    <div className="w-full flex-center flex-col">
      <div className="filter-section flex justify-between items-start">
        {/* 나이 필터 */}
        <div className="age-filter-container border rounded-lg p-4 flex gap-10">
          <div className="filter-options flex items-center gap-4">
            <img src="/images/age.png" alt="나이 아이콘" className="filter-icon" />
            <h3 className="font-semibold">나이</h3>
            {AGE_OPTIONS.map((age) => (
              <button
                key={age}
                className={`filter-button ${selectedAges.includes(age) ? 'selected' : ''}`}
                onClick={() => handleAgeClick(age)}
              >
                {age}
              </button>
            ))}
          </div>

          {/* 급여 필터 */}
          <div className="salary-filter-container">
            <div className="filter-options flex items-center gap-4">
              <img src="/images/salary.png" alt="급여 아이콘" className="filter-icon" />
              <h3 className="font-semibold">급여</h3>
              {SALARY_OPTIONS.map((salary) => (
                <button
                  key={salary}
                  className={`filter-button ${selectedSalaries.includes(salary) ? 'selected' : ''}`}
                  onClick={() => handleSalaryClick(salary)}
                >
                  {salary}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

     
      <div className="relative-container relative">
        <button className="filter-dropdown-button" onClick={toggleFilterDropdown}>검색 필터</button>
        {dropdownOpen && (
          <div className="dropdown-menu absolute mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
            <button className="dropdown-item">인기순</button>
            <button className="dropdown-item">추천순</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
