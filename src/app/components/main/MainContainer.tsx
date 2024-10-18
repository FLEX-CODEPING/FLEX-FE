
import { Dela_Gothic_One } from 'next/font/google';
import MainHeader from './MainHeader';

export const dela = Dela_Gothic_One({
  subsets: ['latin'],
  weight: '400',
});

const MainContainer = () => {
  return (
    <div>
      <MainHeader />
    </div>
  );
};
export default MainContainer;
