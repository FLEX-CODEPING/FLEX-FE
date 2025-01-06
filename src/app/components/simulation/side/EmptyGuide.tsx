import { noneInfo } from '@/app/constants/iconPath';
import Icons from '../../common/Icons';

interface EmptyGuideProps {
  phraseArr: string[];
}

const EmptyGuide = ({ phraseArr }: EmptyGuideProps) => {
  return (
    <div className="w-full h-full flex-center pt-11">
      <div className="flex-col-center text-sm font-medium gap-y-4">
        <Icons name={noneInfo} className="animate-bounce" />
        <p className="text-base">{phraseArr[0]}</p>
        <p>{phraseArr[1]}</p>
      </div>
    </div>
  );
};

export default EmptyGuide;
