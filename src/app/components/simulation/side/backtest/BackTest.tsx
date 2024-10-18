import { SIDE_NAV_TYPES } from '@/app/constants/simulation';

const BackTest = () => {
  return (
    <div className="w-[260px] h-[620px] flex-col flex px-4 py-3.5 border border-gray-4 rounded-[10px]">
      {SIDE_NAV_TYPES[2]}
    </div>
  );
};

export default BackTest;
