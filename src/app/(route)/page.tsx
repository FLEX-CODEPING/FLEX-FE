import Link from 'next/link';
import { redirect } from 'next/navigation';
import { TITLE } from '../constants/main';
import MainContainer from '../components/main/MainContainer';

function HomePage() {
  return (
    <div className="relative w-full min-h-screen">
      <MainContainer/>
    </div>
  );
}

export default HomePage;
