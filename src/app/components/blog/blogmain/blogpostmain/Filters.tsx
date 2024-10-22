import Icons from '@/app/components/common/Icons';
import { AGE_OPTIONS, SALARY_OPTIONS } from '@/app/constants/BlogConstants';
import { ageIcon, salaryIcon } from '@/app/constants/iconPath';
import { Dispatch, SetStateAction } from 'react';

interface FiltersProps {
  selectedAges: string[];
  setSelectedAges: Dispatch<SetStateAction<string[]>>;
  selectedSalaries: string[];
  setSelectedSalaries: Dispatch<SetStateAction<string[]>>;
}

const Filters = ({
  selectedAges,
  setSelectedAges,
  selectedSalaries,
  setSelectedSalaries,
}: FiltersProps) => {
  const handleAgeClick = (age: string) => {
    setSelectedAges((prev) =>
      prev.includes(age) ? prev.filter((a) => a !== age) : [...prev, age],
    );
  };

  const handleSalaryClick = (salary: string) => {
    setSelectedSalaries((prev) =>
      prev.includes(salary)
        ? prev.filter((s) => s !== salary)
        : [...prev, salary],
    );
  };

  return (
    <div className="w-full flex-col space-y-4 mt-9">
      <div className="flex items-start space-x-8 ml-[68px] ">
        <div className="border-[#F95700] bg-white flex justify-center mr-5; items-center border rounded-[20px] h-[40px] px-[20px] py-[1px]">
          <Icons name={ageIcon} />
          <h3 className="font-semibold text-[12px]">나이</h3>
          <div className="flex gap-[17px] justify-center  text-[12px] ">
            {AGE_OPTIONS.map((ageOption) => (
              <button
                type="button"
                key={ageOption}
                className={`px-4 py-1 rounded-full border ${
                  selectedAges.includes(ageOption)
                    ? 'bg-[#FFEBE0] border-white'
                    : 'bg-white border-white'
                }`}
                onClick={() => handleAgeClick(ageOption)}
              >
                {ageOption}
              </button>
            ))}
          </div>
        </div>

        <div className=" px-5 py-[5px] bg-white  justify-center mr-5 flex items-center gap-2.5 border border-[#F95700] rounded-full h-10">
          <Icons name={salaryIcon} />
          <h3 className="font-semibold text-[12px]">급여</h3>
          <div className="flex gap-[17px] text-[12px]">
            {SALARY_OPTIONS.map((salaryOption) => (
              <button
                type="button"
                key={salaryOption}
                className={` px-4 py-1 border-[#F95700] rounded-full cursor-pointer font-normal transition-colors duration-300 ease-in-out  border ${
                  selectedSalaries.includes(salaryOption)
                    ? 'bg-[#FFEBE0] border-white'
                    : 'bg-white border-white'
                }`}
                onClick={() => handleSalaryClick(salaryOption)}
              >
                {salaryOption}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
