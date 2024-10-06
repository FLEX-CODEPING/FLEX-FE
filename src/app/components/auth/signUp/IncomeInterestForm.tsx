import {
  INCOME_RANGE,
  INCOME_TITLE,
  INTEREST_LIST,
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
  const handleIncomeChange = (e: any) => {
    const newValue = parseInt(e.target.value, 10);
    updateFormData('income', newValue);
  };

  const handleInterestClick = (interest: string) => {
    const currentInterests = formData.interest;
    if (currentInterests.includes(interest)) {
      updateFormData(
        'interest',
        currentInterests.filter((item) => item !== interest),
      );
    } else {
      updateFormData('interest', [...currentInterests, interest]);
    }
  };

  return (
    <div className="w-full flex flex-col gap-y-10">
      <div className="w-full relative flex flex-col gap-y-1">
        <div className="text-sm pl-2.5 mb-3">{INCOME_TITLE}</div>
        <input
          type="range"
          min={0}
          max={80}
          step={20}
          value={formData.income}
          onChange={handleIncomeChange}
          className="custom-range"
        />
        <div className="flex w-full gap-x-[30px] justify-center text-xs text-gray-1 relative px-[64px]">
          {INCOME_RANGE.map((income) => (
            <p className="w-[54px] text-center text-[11px]" key={income}>
              {income}
            </p>
          ))}
          <div className="absolute bottom-7 left-[85px] w-1 h-1 rounded-full bg-main-1" />
          <div className="absolute bottom-7 left-[165px] w-1 h-1 rounded-full bg-main-1" />
          <div className="absolute bottom-7 left-[245px] w-1 h-1 rounded-full bg-main-1" />
          <div className="absolute bottom-7 left-[325px] w-1 h-1 rounded-full bg-main-1" />
          <div className="absolute bottom-7 left-[405px] w-1 h-1 rounded-full bg-main-1" />
        </div>
      </div>
      <div className="w-full relative flex flex-col">
        <div className="text-sm pl-2.5 mb-3">{INTEREST_TITLE}</div>
        <div className="w-full flex flex-wrap gap-x-[22px] gap-y-[18px] h-[110px] rounded-2xl border border-gray-2 px-[41px] py-[14px]">
          {INTEREST_LIST.map((interest) => (
            <div
              key={interest}
              onClick={() => handleInterestClick(interest)}
              className={`w-16 h-8 flex-center text-[12px] border rounded-2xl cursor-pointer ${
                formData.interest.includes(interest)
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
