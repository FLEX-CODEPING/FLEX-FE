import {
  BIRTH,
  BIRTH_DATE,
  BLOGNAME_TEXT,
  NICKNAME_TEXT,
} from '@/app/constants/auth';
import '@/app/styles/slider.css';
import Input from '../../common/Input';

interface PersonalInfoFormProps {
  formData: SignUpFormTypes;
  updateFormData: (key: string, value: any) => void;
}

const PersonalInfoForm = ({
  formData,
  updateFormData,
}: PersonalInfoFormProps) => {
  const regex2 = /^[a-zA-Z0-9가-힣]{2,8}$/;
  const isWrong = (text: string) => {
    return !regex2.test(text) && text.length !== 0;
  };

  return (
    <div className="w-full flex flex-col gap-y-5">
      <div className="w-full flex flex-col gap-x-2.5 gap-y-1">
        <div className="text-sm pl-2.5">{BIRTH[0]}</div>
        <div className="w-full flex gap-x-2.5">
          <Input
            type="signUp"
            inputType="date"
            min="1900-01-01"
            max={new Date().toISOString().split('T')[0]}
            textValue={formData.date}
            onFocus={(e) => e.target.showPicker()}
            onChange={(e) => updateFormData('date', e.target.value)}
            placeholder={BIRTH_DATE[0]}
          />
        </div>
        <div className="text-xs pl-2.5 text-gray-1">{BIRTH[1]}</div>
      </div>
      <div className="w-full flex flex-col gap-x-2.5 gap-y-1">
        <div className="text-sm pl-2.5">{NICKNAME_TEXT[0]}</div>
        <Input
          type="signUp"
          textValue={formData.nickName}
          onChange={(e) => updateFormData('nickName', e.target.value)}
          placeholder={NICKNAME_TEXT[1]}
          maxLength={8}
          className="pr-8"
        />
        <div
          className={`text-xs pl-2.5 text-gray-1 ${isWrong(formData.nickName) && 'text-red-1'}`}
        >
          {NICKNAME_TEXT[2]}
        </div>
      </div>
      <div className="w-full flex flex-col gap-x-2.5 gap-y-1">
        <div className="text-sm pl-2.5">{BLOGNAME_TEXT[0]}</div>
        <Input
          type="signUp"
          textValue={formData.blogName}
          onChange={(e) => updateFormData('blogName', e.target.value)}
          placeholder={BLOGNAME_TEXT[1]}
          maxLength={8}
        />
        <div
          className={`text-xs pl-2.5 text-gray-1 ${isWrong(formData.blogName) && 'text-red-1'}`}
        >
          {BLOGNAME_TEXT[2]}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
