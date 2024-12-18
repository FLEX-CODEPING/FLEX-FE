'use client';

import {
  SIDE_NAV_ICONS,
  SIDE_NAV_ICONS_SELECTED,
  SIDE_NAV_TYPES,
} from '@/app/constants/simulation';
import { useSidebarStore } from '@/app/store/store';
import Icons from '../../common/Icons';

const SideNav = () => {
  const { selectedItem, setSelectedItem } = useSidebarStore();

  return (
    <div className="w-16 fixed flex flex-col items-center pt-9 bg-white rounded-tl-lg border-l border-t border-gray-4 gap-y-6 right-0 h-[calc(100vh-140px)] dark:bg-black-0 dark:text-gray-3">
      {SIDE_NAV_TYPES.map((type, i) => (
        <div
          key={type}
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => setSelectedItem(type)}
        >
          <Icons
            name={
              selectedItem === type
                ? SIDE_NAV_ICONS_SELECTED[i]
                : SIDE_NAV_ICONS[i]
            }
          />
          <p className="text-[10px] font-normal">{type}</p>
        </div>
      ))}
    </div>
  );
};

export default SideNav;
