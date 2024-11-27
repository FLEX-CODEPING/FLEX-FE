'use client';

import { useSidebarStore } from '@/app/store/store';
import BackTest from './backtest/BackTest';
import Interest from './interest/Interest';
import Posession from './posession/Posession';
import Status from './status/Status';
import Trade from './trade/Trade';

const ActiveSide = () => {
  const { selectedItem } = useSidebarStore();
  const activeComponenet = () => {
    switch (selectedItem) {
      case '관심종목':
        return <Interest />;
      case '보유종목':
        return <Posession />;
      case '백테스팅':
        return <BackTest />;
      case '거래현황':
        return <Status />;
      case '내 거래내역':
        return <Trade />;
      default:
        return null;
    }
  };

  return <div className="pt-20 mr-[1.5%]">{activeComponenet()}</div>;
};

export default ActiveSide;
