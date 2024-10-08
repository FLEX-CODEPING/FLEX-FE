import SignUpContainer from '@/app/components/auth/signUp/SignUpContainer';
import { AUTH_TITLE } from '@/app/constants/auth';

function SignUpPage() {
  return (
    <section className="w-full h-full flex items-center flex-col mt-[40px]">
      <p className="text-4xl font-medium">{AUTH_TITLE}</p>
      <SignUpContainer />
    </section>
  );
}

export default SignUpPage;
