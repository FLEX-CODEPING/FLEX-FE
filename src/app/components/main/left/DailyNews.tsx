import { MAIN_LEFT_TITLE } from '@/app/constants/main';
import { MOOK_ARTICLES } from '@/app/data/main';
import Image from 'next/image';

const DailyNews = () => {
  return (
    <div className="px-6 py-4 flex-col flex w-full">
      <div className="flex w-full justify-between items-end">
        <p className="text-xl font-bold">{MAIN_LEFT_TITLE[0]}</p>
        <p className="text-xs">2024.10.04</p>
      </div>
      <div className="w-full px-5 py-5 flex-col-center gap-y-5">
        {MOOK_ARTICLES.map((article, i) => (
          <div className="flex gap-x-4 w-full justify-between">
            <Image src={article.thumbnail} alt={''} width={100} height={69} />
            <div className="flex flex-col w-full gap-y-1">
              <div className="flex w-full justify-between">
                <p className="text-sm font-semibold">{article.title}</p>
                <p className="text-[10px]">{article.media}</p>
              </div>
              <p className="text-xs leading-normal">{article.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyNews;
