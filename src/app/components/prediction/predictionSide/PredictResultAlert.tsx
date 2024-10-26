import { blueArrow, infoIcon } from '@/app/constants/iconPath';
import { PREDICTION_SIDEBAR_RESULT } from '@/app/constants/prediction';
import Button from '../../common/Button';
import Icons from '../../common/Icons';

interface PredictResultAlertProps {
  stockName: string;
  result: string;
  resultPrice: number;
  resultPercent: number;
}

const PredictResultAlert = ({
  stockName,
  result,
  resultPrice,
  resultPercent,
}: PredictResultAlertProps) => {
  const mainColor = result === '하락' ? 'text-blue-1' : 'text-red-1';
  return (
    <div className="flex-col-center gap-y-3">
      <div className="w-full px-5 py-3.5 flex-col-center rounded-[10px] border border-gray-4">
        <div className="flex w-full justify-between items-end border-b border-b-gray-2 pb-1 px-1">
          <p>{PREDICTION_SIDEBAR_RESULT[0]}</p>
          <p className="text-[10px] text-gray-1 flex gap-0.5">
            <Icons name={infoIcon} />
            {PREDICTION_SIDEBAR_RESULT[1]}
          </p>
        </div>
        <div className="flex px-2 w-full justify-between items-end mb-1 mt-2.5 text-xs">
          <div className="flex gap-1 text-sm">
            <p className="font-semibold">{stockName}</p>
            <p>{PREDICTION_SIDEBAR_RESULT[2]}</p>
          </div>
          <p className={`text-xl font-semibold ${mainColor}`}>{result}</p>
        </div>
        <div className="flex px-2 w-full justify-between items-end mb-5 mt-2 text-xs">
          <p>{PREDICTION_SIDEBAR_RESULT[3]}</p>
          <div className={`flex gap-1 ${mainColor} items-center`}>
            <Icons name={blueArrow} />
            <p className="text-xs">({resultPercent})%</p>
            <p className="text-sm">{resultPrice}원</p>
          </div>
        </div>
        <Button
          buttonText={PREDICTION_SIDEBAR_RESULT[4]}
          type="prediction"
          onClickHandler={() => console.log('분석 중...')}
        />
      </div>
      <div className="w-full px-5 py-3.5 flex-col-center rounded-[10px] border border-gray-4">
        <div className="flex w-full justify-between items-end border-b border-b-gray-2 pb-1 px-1">
          <p>{PREDICTION_SIDEBAR_RESULT[0]}</p>
          <p className="text-[10px] text-gray-1 flex gap-0.5">
            <Icons name={infoIcon} />
            {PREDICTION_SIDEBAR_RESULT[1]}
          </p>
        </div>
        <div className="flex px-2 w-full justify-between items-end mb-1 mt-2.5 text-xs">
          <div className="flex gap-1 text-sm">
            <p className="font-semibold">{stockName}</p>
            <p>{PREDICTION_SIDEBAR_RESULT[2]}</p>
          </div>
          <p className={`text-xl font-semibold ${mainColor}`}>{result}</p>
        </div>
        <div className="flex px-2 w-full justify-between items-end mb-5 mt-2 text-xs">
          <p>{PREDICTION_SIDEBAR_RESULT[3]}</p>
          <div className={`flex gap-1 ${mainColor} items-center`}>
            <Icons name={blueArrow} />
            <p className="text-xs">({resultPercent})%</p>
            <p className="text-sm">{resultPrice}원</p>
          </div>
        </div>
        <Button
          buttonText={PREDICTION_SIDEBAR_RESULT[4]}
          type="prediction"
          onClickHandler={() => console.log('분석 중...')}
        />
      </div>
    </div>
  );
};

export default PredictResultAlert;
