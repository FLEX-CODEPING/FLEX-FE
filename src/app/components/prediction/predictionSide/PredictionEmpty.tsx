import { noneInfo } from '@/app/constants/iconPath';
import { PREDICTION_EMPTY_TEXT } from '@/app/constants/Prediction';
import Icons from '../../common/Icons';

const PredictionEmpty = () => {
  return (
    <div className="w-full h-[623px] px-8 py-4 flex-col-center justify-center rounded-[10px] border gap-y-1 border-gray-4">
      <Icons name={noneInfo} className="mb-3" />
      <p>{PREDICTION_EMPTY_TEXT[0]}</p>
      <p>{PREDICTION_EMPTY_TEXT[1]}</p>
    </div>
  );
};

export default PredictionEmpty;
