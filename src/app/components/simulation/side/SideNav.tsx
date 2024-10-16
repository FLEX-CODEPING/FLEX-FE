import { SIDE_NAV_ICONS, SIDE_NAV_TYPES } from '@/app/constants/simulation';
import Icons from '../../common/Icons';

const SideNav = () => {
  return (
    <div className="w-16 flex flex-col items-center pt-9 bg-white rounded-tl-lg border-l border-t border-gray-1 gap-y-6">
      {SIDE_NAV_TYPES.map((type, i) => (
        <div
          key={type}
          className="flex flex-col items-center gap-1 cursor-pointer"
        >
          <Icons name={SIDE_NAV_ICONS[i]} />
          <p className="text-[10px] font-normal">{type}</p>
        </div>
      ))}
    </div>
  );
};

export default SideNav;
