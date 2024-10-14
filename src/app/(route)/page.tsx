import Link from 'next/link';
import { redirect } from 'next/navigation';
import { TITLE } from '../constants/main';

function HomePage() {
  redirect('/auth');
  return (
    <div className="relative w-full min-h-screen">
      <Link href="/test">{TITLE}</Link>
    </div>
  );
}

export default HomePage;
