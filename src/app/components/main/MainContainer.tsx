import { CATCH_PHRASE } from '@/app/constants/main';
import { Dela_Gothic_One } from 'next/font/google';

export const dela = Dela_Gothic_One({
  subsets: ['latin'],
  weight: '400',
});

const MainContainer = () => {
  return (
    <div className="w-full h-44 mt-[50px] px-[5%] pb-[30px] justify-center items-center flex flex-col">
      <div>
        <span className="text-[#424242] text-[40px] font-normal">
          {CATCH_PHRASE[0]}
        </span>
      </div>
      <div>
        <span className={`text-main-1 text-[64px] ${dela.className}`}>
          {CATCH_PHRASE[1]}
        </span>
        <span className="text-[#424242] text-[64px] font-normal">
          {CATCH_PHRASE[2]}
        </span>
      </div>
    </div>
  );
};
export default MainContainer;
