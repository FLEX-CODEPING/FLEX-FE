import { noneInfo } from '@/app/constants/iconPath';
import { NONE_MAIN_INFO } from '@/app/constants/main';
import Icons from '../common/Icons';

const NoneContent = () => {
  return (
    <div className="w-full h-full flex-col-center justify-center gap-y-2">
      <Icons name={noneInfo} />
      <p>{NONE_MAIN_INFO[0]}</p>
      <p>{NONE_MAIN_INFO[1]}</p>
    </div>
  );
};

export default NoneContent;
