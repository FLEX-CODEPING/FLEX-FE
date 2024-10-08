import {
  MAIN_FEAT,
  MAIN_FEAT_DETAIL,
  MAIN_FEAT_IMG,
} from '@/app/constants/main';
import Image from 'next/image';
import Link from 'next/link';

function SignInContainer() {
  return (
    <div className="gap-y-[84px] flex flex-col mt-12">
      <div className="flex flex-col gap-y-3">
        {MAIN_FEAT.map((feat, i) => (
          <div className="flex items-center" key={feat}>
            <Image
              width={84}
              height={84}
              src={`/images/${MAIN_FEAT_IMG[i]}`}
              alt="logoImg"
            />
            <div className="flex flex-col">
              <p className="text-2xl font-bold">{feat}</p>
              <p className="texl-xl">{MAIN_FEAT_DETAIL[i]}</p>
            </div>
          </div>
        ))}
      </div>
      <Link href="/login">
        <Image
          src="/images/kakao_login.png"
          alt="loginImg"
          width={360}
          height={55}
        />
      </Link>
    </div>
  );
}

export default SignInContainer;
