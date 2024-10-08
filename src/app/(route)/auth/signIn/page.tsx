import SignInContainer from '@/app/components/auth/signIn/SignInContainer';
import { dela } from '@/app/components/common/layout/Header';
import AuthSession from '@/app/components/providers/session-provider';
import { CATCHPHRASE, TITLE } from '@/app/constants/main';

function SignInPage() {
  return (
    <section className="w-full h-full flex items-center flex-col mt-[1%]">
      <p className={`${dela.className} text-[96px] text-main-1`}>{TITLE}</p>
      <p className="text-4xl font-bold">{CATCHPHRASE}</p>
      <AuthSession>
        <SignInContainer />
      </AuthSession>
    </section>
  );
}

export default SignInPage;
