import Link from 'next/link';
import { TITLE } from '../constants/main';

function HomePage() {
  return (
    <div className="relative w-full min-h-screen">
      <Link href="/test">{TITLE}</Link>
    </div>
  );
}

export default HomePage;
