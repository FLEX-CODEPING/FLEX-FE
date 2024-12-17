import { CATCH_PHRASE } from '@/app/constants/main';
import { Dela_Gothic_One } from 'next/font/google';

export const dela = Dela_Gothic_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const MainHeader = () => {
  return (
    <div className="w-full h-44 mt-4 px-[5%] pb-4 justify-center items-center flex flex-col">
      <div>
        <span className="text-[#424242] text-[35px] font-semibold whitespace-nowrap">
          {CATCH_PHRASE[0]}
        </span>
      </div>
      <div className="text-5xl mt-3">
        <span className={`text-main-1 ${dela.className}`}>
          {CATCH_PHRASE[1]}
        </span>
        <span className="text-[#424242] font-normal">{CATCH_PHRASE[2]}</span>
      </div>
    </div>
  );
};
export default MainHeader;
