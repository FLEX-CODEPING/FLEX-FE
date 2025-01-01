import { kakakoIcon } from '@/app/constants/iconPath';
import { KAKAO_BTN_TEXT, RECOMMEND_LOGIN } from '@/app/constants/main';
import Image from 'next/image';
import Link from 'next/link';
import Icons from '../../common/Icons';

const RecommendBlur = () => {
  return (
    <div className="w-full h-[424px] flex-col-center justify-center shadow rounded-2xl bg-gray-5 gap-y-6">
      <div className="relative w-[120px] h-[120px]">
        <Image
          src="/images/keys2.png"
          alt="로그인 사진"
          fill
          loading="lazy"
          sizes="120px, 120px"
        />
      </div>
      <p className="w-[190px] text-lg flex flex-wrap font-medium text-center">
        {RECOMMEND_LOGIN}
      </p>
      <Link
        className="flex relative w-52 h-10 rounded-xl bg-[#FEE500] px-4 items-center justify-center gap-x-8"
        href="/auth"
      >
        <Icons name={kakakoIcon} />
        <p className="sm">{KAKAO_BTN_TEXT}</p>
      </Link>
    </div>
  );
};

export default RecommendBlur;
