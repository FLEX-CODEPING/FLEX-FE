import { infoIcon } from '@/app/constants/iconPath';
import {
  ANALYZE_CAUTION,
  ANALYZE_HEADER_TEXT,
  ANALYZE_RESULT_GUIDE,
  ANALYZE_RESULT_TITLE,
} from '@/app/constants/prediction';
import { ANALYZE_MOCK } from '@/app/data/simulation';
import Icons from '../common/Icons';

const AnalyzeContainer = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="w-full h-[120px] bg-black-1 px-[4%] pt-[40px]">
        <div className="flex h-12 border-l-2 border-white pl-3 text-2xl text-white justify-between items-end">
          <div className="flex pb-2 tracking-wide">
            <p>지원핑</p>
            <p className="font-extralight ml-1">{ANALYZE_HEADER_TEXT[0]}</p>
            <p>{ANALYZE_HEADER_TEXT[1]}</p>
            <p className="font-extralight">{ANALYZE_HEADER_TEXT[2]}</p>
          </div>
          <p className="font-semibold text-main-1/90 text-sm tracking-wide">
            {ANALYZE_CAUTION[0]}
          </p>
        </div>
      </div>
      <div className="px-[6%] w-full h-[194px] flex-col flex gap-3">
        <div className="w-full px-3 pt-3 pb-1.5 bg-white border-b border-main-1 justify-between items-end flex">
          <div className="text-center text-black text-2xl font-bold font-['Plus Jakarta Sans'] leading-9">
            {ANALYZE_RESULT_TITLE[0]}
          </div>
          <div className="text-center text-gray-1 text-xs flex items-center gap-1 tracking-wide">
            <Icons name={infoIcon} />
            <p>{ANALYZE_RESULT_GUIDE[0]}</p>
          </div>
        </div>
        <div className="pl-10 leading-9">
          <ol className="list-decimal tracking-wider">
            <li>{ANALYZE_MOCK[0]}</li> 
            <li>{ANALYZE_MOCK[1]}</li>
            <li>{ANALYZE_MOCK[2]}</li>
          </ol>
        </div>
      </div>
      <div className="px-[6%] w-full h-[194px] flex-col flex gap-3">
        <div className="w-full px-3 pt-3 pb-1.5 bg-white border-b border-main-1 justify-between items-end flex">
          <div className="text-center text-black text-2xl font-bold font-['Plus Jakarta Sans'] leading-9">
            {ANALYZE_RESULT_TITLE[1]}
          </div>
          <div className="text-center text-gray-1 text-xs flex items-center gap-1 tracking-wide">
            <Icons name={infoIcon} />
            <p>{ANALYZE_RESULT_GUIDE[0]}</p>
          </div>
        </div>
        <div className="pl-10 leading-9">
          <ol className="list-decimal tracking-wider">
            <li>{ANALYZE_MOCK[0]}</li> 
            <li>{ANALYZE_MOCK[1]}</li>
            <li>{ANALYZE_MOCK[2]}</li>
          </ol>
        </div>
      </div>
      <div className="px-[6%] w-full h-[194px] flex-col flex gap-3">
        <div className="w-full px-3 pt-3 pb-1.5 bg-white border-b border-main-1 justify-between items-end flex">
          <div className="text-center text-black text-2xl font-bold font-['Plus Jakarta Sans'] leading-9">
            {ANALYZE_RESULT_TITLE[2]}
          </div>
          <div className="text-center text-gray-1 text-xs flex items-center gap-1 tracking-wide">
            <Icons name={infoIcon} />
            <p>{ANALYZE_RESULT_GUIDE[0]}</p>
          </div>
        </div>
        <div className="pl-10 leading-9">
          <ol className="list-decimal tracking-wider">
            <li>{ANALYZE_MOCK[0]}</li> 
            <li>{ANALYZE_MOCK[1]}</li>
            <li>{ANALYZE_MOCK[2]}</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AnalyzeContainer;
