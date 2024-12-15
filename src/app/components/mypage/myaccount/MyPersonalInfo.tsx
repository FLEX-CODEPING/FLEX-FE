import {
  BIRTH,
  BIRTH_DATE,
  BLOGNAME_TEXT,
  NICKNAME_TEXT,
} from '@/app/constants/auth';
import { isCorrect } from '@/app/utils/qualify';
import { ACCOUNT_TEXT } from '@/app/constants/mypage';
import Input from '../../common/Input';

interface MyPersonalInfoProps {
  formData: AccountFormTypes;
  updateFormData: (key: string, value: any) => void;
}

const MyPersonalInfo = ({ formData, updateFormData }: MyPersonalInfoProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className="w-full flex flex-col gap-x-2.5 gap-y-1">
        <div className="text-sm pl-2.5">{NICKNAME_TEXT[0]}</div>
        <Input
          type="signUp"
          textValue={formData.nickname}
          onChange={(e) => updateFormData('nickname', e.target.value)}
          placeholder="NAKDO"
          maxLength={8}
          className="pr-8 rounded-[10px]"
        />
      </div>
      <div className="w-full flex flex-col gap-x-2.5 gap-y-1">
        <div className="text-sm pl-2.5">{BLOGNAME_TEXT[0]}</div>
        <div className="flex items-center justify-between gap-2.5">
          <Input
            type="blogName"
            textValue={formData.blogName}
            onChange={(e) => updateFormData('blogName', e.target.value)}
            placeholder={BLOGNAME_TEXT[1]}
            maxLength={8}
          />
          <button
            type="button"
            className="py-2 px-4 rounded-[10px] border bg-black-0 text-white text-sm font-medium"
          >
            {ACCOUNT_TEXT[2]}
          </button>
        </div>
        <div
          className={`text-xs pl-2.5 text-gray-1 ${
            !isCorrect(formData.blogName) && 'text-red-1'
          }`}
        >
          {BLOGNAME_TEXT[2]}
        </div>
      </div>
      <div className="w-full flex flex-col gap-x-2.5 gap-y-1">
        <div className="text-sm pl-2.5">{BIRTH[0]}</div>
        <div className="w-full flex gap-x-2.5">
          <div className="w-full rounded-[10px] py-2 px-4 border border-gray-300 bg-gray-50 text-gray-700 text-sm">
            {formData.birth || '생년월일 정보 없음'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPersonalInfo;
