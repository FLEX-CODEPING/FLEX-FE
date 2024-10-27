import { likeSmall } from '@/app/constants/iconPath';
import { v4 as uuidv4 } from 'uuid';
import Icons from '../common/Icons';

const MyPostCard = () => {
  const likeCount = 27;
  const tags = ['주식', '투자'];

  return (
    <div className="w-full h-[590px] flex-col  inline-flex transition-all rounded-lg duration-300 ease-in-out hover:shadow-lg">
      <img
        className="w-full h-[400px] rounded-[10px]"
        src="/images/3c.png"
        alt="thumbnail"
      />
      <div className="w-full  px-3 py-[18px] flex-col gap-2 flex">
        <div className="pt-[5px] pb-1 gap-2 flex justify-between items-center text-black-0 text-lg font-bold">
          <span>주식 투자 회고: 2023년의 교훈</span>
          <div className="flex items-center gap-1">
            <Icons name={likeSmall} />
            <span className="text-black-0 font-bold">{likeCount}</span>
          </div>
        </div>
        <div className="justify-start items-start gap-2 inline-flex">
          <div className="h-9 text-black-0 text-base">
            2023년은 주식 투자에 있어 많은 변화를 경험한 해였습니다. 글로벌
            경제의 불확실성과 금리 인상 등의 요인이 시장에 큰 영향을 미쳤습니다.
            이러한 환경 속에서 저는 여러 가지 투자 전략을 시도하며 다양한 교훈을
            얻었습니다. 특히, 감정적 결정을 피하고 데이터 기반으로 접근하는 것이
            얼마나 중요한지 깨달았습니다. 이번 회고를 통해 저의 투자 여정을
            돌아보고, 앞으로의 방향
          </div>
        </div>
        <div className="flex justify-between items-center mt-7">
          <div className="flex gap-x-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 px-3 py-1 rounded-full text-gray-800 text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="text-right text-[#7a7a7a] text-sm font-normal">
            2024.09.25
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyPostCard;
