import React from 'react';
import { AGE_OPTIONS, SALARY_OPTIONS } from '@/app/constants/BlogConstants'; // 상수 불러오기

interface FilterProps {
  selectedAges: string[];
  selectedSalaries: string[];
  handleAgeClick: (age: string) => void;
  handleSalaryClick: (salary: string) => void;
  toggleFilterDropdown: () => void;
  dropdownOpen: boolean;
}

const Filters: React.FC<FilterProps> = ({
  selectedAges,
  selectedSalaries,
  handleAgeClick,
  handleSalaryClick,
  toggleFilterDropdown,
  dropdownOpen
}) => {
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

      {/* 검색 필터 드롭다운 버튼 */}
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
