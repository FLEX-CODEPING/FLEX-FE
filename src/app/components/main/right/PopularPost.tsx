import { likeSmall, viewsIcon } from '@/app/constants/iconPath';
import { MAIN_CONTENTS_TITLE } from '@/app/constants/main';
import { callGet } from '@/app/utils/callApi';
import { formatDate } from '@/app/utils/date';
import { truncateString } from '@/app/utils/truncate';
import Link from 'next/link';
import Icons from '../../common/Icons';
import NoneContent from '../NoneContent';

const PopularPost = async () => {
  const response = await callGet(
    `${process.env.NEXT_PUBLIC_LOCAL}/api/main/popular`,
  );
  const postDatas: LandingPostTypes[] = response.isSuccess
    ? response.result
    : [];

  return (
    <div className="flex-col-center w-full gap-y-5">
      <div className="w-full flex items-end justify-between px-3 py-4 border-b border-gray-2">
        <p className="text-2xl font-semibold">{MAIN_CONTENTS_TITLE[3]}</p>
      </div>
      {postDatas?.length === 0 ? (
        <div className="w-full h-[328px]">
          <NoneContent />
        </div>
      ) : (
        <div className="w-full flex flex-col gap-y-4">
          {postDatas.map((data, i) => (
            <Link
              href={`/blog/detail?id=${data.id}`}
              className="w-full flex-col flex py-2 px-4 gap-y-1 cursor-pointer border-b border-b-gray-3 hover:border-b-main-1 transition duration-500"
              key={data.id}
            >
              <div className="w-full h-[50px] flex justify-between">
                <div className="h-full flex justify-between flex-col">
                  <p className="font-semibold pt-0.5">
                    {truncateString(data.title, 30)}
                  </p>
                  <p className="text-[10px] text-gray-1 font-light">
                    {formatDate(data.createdAt)}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2.5">
                  <div className="flex justify-between items-center">
                    <Icons
                      name={{
                        ...likeSmall,
                        fill: '#F95700',
                      }}
                    />
                    <p className="text-sm font-medium pl-2">{data.likeCount}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <Icons name={viewsIcon} />
                    <p className="text-sm font-medium pl-2">{data.viewCount}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularPost;
