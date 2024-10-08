import {
  BIRTH,
  BIRTH_DATE,
  BIRTH_TYPE,
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
  return (
    <div className="w-full flex flex-col gap-y-5">
      <div className="w-full flex flex-col gap-x-2.5 gap-y-1">
        <div className="text-sm pl-2.5">{BIRTH[0]}</div>
        <div className="w-full flex gap-x-2.5">
          {BIRTH_TYPE.map((type, index) => {
            const value = formData[type as keyof SignUpFormTypes];
            return (
              <Input
                key={type}
                type="signUp"
                textValue={typeof value === 'string' ? value : ''}
                onChange={(e) => updateFormData(type, e.target.value)}
                placeholder={BIRTH_DATE[index]}
                maxLength={type === 'year' ? 4 : 2}
              />
            );
          })}
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
        />
        <div className="text-xs pl-2.5 text-gray-1">{NICKNAME_TEXT[2]}</div>
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
        <div className="text-xs pl-2.5 text-gray-1">{BLOGNAME_TEXT[2]}</div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
