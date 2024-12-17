import { SIDE_NAV_TYPES } from '@/app/constants/simulation';

const LoadingPossesion = () => {
  return (
    <div className="w-[260px] h-[628px] flex-col flex px-4 py-3.5 gap-y-3 border border-gray-4 rounded-[10px]">
      <p className="text-base">{SIDE_NAV_TYPES[1]}</p>

      <div className="w-[226px] h-11 bg-gray-4 animate-pulse rounded-md"></div>
      <div className="w-[226px] h-11 bg-gray-4/90 animate-pulse rounded-md"></div>
      <div className="w-[226px] h-11 bg-gray-4/85 animate-pulse rounded-md"></div>
      <div className="w-[226px] h-11 bg-gray-4/80 animate-pulse rounded-md"></div>
      <div className="w-[226px] h-11 bg-gray-4/75 animate-pulse rounded-md"></div>
      <div className="w-[226px] h-11 bg-gray-4/70 animate-pulse rounded-md"></div>
      <div className="w-[226px] h-11 bg-gray-4/65 animate-pulse rounded-md"></div>
    </div>
  );
};

export default LoadingPossesion;
