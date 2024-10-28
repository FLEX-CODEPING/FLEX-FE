import {
  INCOME_RANGE,
  INCOME_RANGE_MAP,
  INCOME_TITLE,
  INTEREST_LIST,
  INTEREST_MAP,
  INTEREST_TITLE,
} from '@/app/constants/auth';

interface IncomeInterestProps {
  formData: SignUpFormTypes;
  updateFormData: (key: string, value: any) => void;
}

const IncomeInterestForm = ({
  formData,
  updateFormData,
}: IncomeInterestProps) => {
  const handleInterestClick = (interest: string) => {
    const currentInterests = formData.interestKeywords;
    if (currentInterests.includes(interest)) {
      updateFormData(
        'interestKeywords',
        currentInterests.filter((item) => item !== interest),
      );
    } else {
      updateFormData('interestKeywords', [...currentInterests, interest]);
    }
  };

  return (
    <div className="w-full flex flex-col gap-y-3 mb-[4%]">
      <div className="w-full relative flex flex-col gap-y-1">
        <div className="text-sm pl-2.5">{INCOME_TITLE}</div>
        <div className="w-full flex items-center flex-wrap justify-center gap-x-[20px] gap-y-[12px] h-[100px] rounded-2xl border border-gray-2 px-[41px] py-[10px]">
          {INCOME_RANGE.map((income) => (
            <div
              key={income}
              onClick={() => updateFormData('salary', INCOME_RANGE_MAP[income])}
              className={`w-20 h-8 flex-center text-[11px] border rounded-2xl cursor-pointer ${
                formData.salary === INCOME_RANGE_MAP[income]
                  ? 'border-main-1 bg-main-1 text-white'
                  : 'border-gray-1'
              }`}
            >
              {income}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full relative flex flex-col">
        <div className="text-sm pl-2.5 mb-1">{INTEREST_TITLE}</div>
        <div className="w-full flex flex-wrap  items-center justify-center gap-x-[22px] gap-y-[12px] h-[100px] rounded-2xl border border-gray-2 px-[41px] py-[10px]">
          {INTEREST_LIST.map((interest) => (
            <div
              key={interest}
              onClick={() => handleInterestClick(INTEREST_MAP[interest])}
              className={`w-16 h-8 flex-center text-[11px] border rounded-2xl cursor-pointer ${
                formData.interestKeywords.includes(INTEREST_MAP[interest])
                  ? 'border-main-1 bg-main-1 text-white'
                  : 'border-gray-1'
              }`}
            >
              {interest}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IncomeInterestForm;
