import Link from 'next/link';
import Header from '../components/common/layout/Header';
import { TITLE } from '../constants/main';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      <Header />
      <Link href="/test">{TITLE}</Link>
    </div>
  );
}
