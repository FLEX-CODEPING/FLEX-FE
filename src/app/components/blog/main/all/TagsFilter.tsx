import Icons from '@/app/components/common/Icons';
import { AGE_OPTIONS, SALARY_OPTIONS } from '@/app/constants/blog';
import { ageIcon, salaryIcon } from '@/app/constants/iconPath';
import { Dispatch, SetStateAction } from 'react';

interface TagsFilterProps {
  selectedAges: string;
  setSelectedAges: Dispatch<SetStateAction<string>>;
  selectedSalaries: string;
  setSelectedSalaries: Dispatch<SetStateAction<string>>;
}

const TagsFilter = ({
  selectedAges,
  setSelectedAges,
  selectedSalaries,
  setSelectedSalaries,
}: TagsFilterProps) => {
  return (
    <div className="w-full flex-col space-y-4 mt-9">
      <div className="flex items-start space-x-8 text-[12px]">
        <div className="border-[#F95700] bg-white flex-center border rounded-[20px] h-10 px-5">
          <Icons name={ageIcon} />
          <h3 className="font-semibold ml-2.5">나이</h3>
          <div className="flex pl-2 gap-x-[15px]">
            {AGE_OPTIONS.map((ageOption) => (
              <button
                type="button"
                key={ageOption}
                className={`px-2.5 py-1 rounded-full ${
                  selectedAges === ageOption ? 'bg-[#FFEBE0]' : 'bg-white'
                }`}
                onClick={() =>
                  setSelectedAges(selectedAges === ageOption ? '' : ageOption)
                }
              >
                {ageOption}
              </button>
            ))}
          </div>
        </div>

        <div className=" px-5 bg-white flex-center gap-2.5 border border-[#F95700] rounded-full h-10">
          <Icons name={salaryIcon} />
          <h3 className="font-semibold">급여</h3>
          <div className="flex gap-x-4">
            {SALARY_OPTIONS.map((salaryOption) => (
              <button
                type="button"
                key={salaryOption}
                className={` px-2.5 py-1 rounded-full cursor-pointer font-normal transition-colors duration-300 ease-in-out ${
                  selectedSalaries === salaryOption
                    ? 'bg-[#FFEBE0]'
                    : 'bg-white'
                }`}
                onClick={() =>
                  setSelectedSalaries(
                    selectedSalaries === salaryOption ? '' : salaryOption,
                  )
                }
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

export default TagsFilter;
