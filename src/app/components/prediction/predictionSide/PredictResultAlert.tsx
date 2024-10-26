import { infoIcon } from '@/app/constants/iconPath';
import Icons from '../../common/Icons';

const PredictResultAlert = () => {
  return (
    <div>
      <div className="flex gap-0.5">
        <Icons name={infoIcon} />
      </div>
    </div>
  );
};

export default PredictResultAlert;
