import { redirect } from 'next/navigation';

const defaultPage = () => {
  redirect('/auth/signIn');
};

export default defaultPage;
