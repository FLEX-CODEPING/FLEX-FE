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
    <div className="w-full flex flex-col gap-y-10 mb-[4%]">
      <div className="w-full relative flex flex-col gap-y-1">
        <div className="flex gap-x-4 pl-2.5 mb-1 text-sm">
          <div>{INCOME_TITLE}</div>
          <div>
            {Number(formData.income) >= 10000
              ? `${(Number(formData.income) / 10000).toFixed(2)}억`
              : `약 ${formData.income} 만원`}
          </div>
        </div>

        <input
          type="range"
          min={0}
          max={2000}
          step={10}
          value={formData.income}
          onChange={handleIncomeChange}
          className="custom-range"
        />
        <div className="flex w-full justify-between text-xs text-gray-1 relative px-[10px]">
          {INCOME_RANGE.map((income) => (
            <p className="flex w-[22px] text-[10px] text-center" key={income}>
              {income}
            </p>
          ))}
          <div className="absolute bottom-7 left-[10px] w-1 h-1 rounded-full bg-main-1" />
          <div className="absolute bottom-7 left-[66px] w-1 h-1 rounded-full bg-main-1" />
          <div className="absolute bottom-7 left-[122px] w-1 h-1 rounded-full bg-main-1" />
          <div className="absolute bottom-7 left-[178px] w-1 h-1 rounded-full bg-main-1" />
          <div className="absolute bottom-7 left-[232px] w-1 h-1 rounded-full bg-main-1" />
          <div className="absolute bottom-7 left-[290px] w-1 h-1 rounded-full bg-main-1" />
          <div className="absolute bottom-7 left-[352px] w-1 h-1 rounded-full bg-main-1" />
          <div className="absolute bottom-7 left-[412px] w-1 h-1 rounded-full bg-main-1" />
          <div className="absolute bottom-7 left-[480px] w-1 h-1 rounded-full bg-main-1" />
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
