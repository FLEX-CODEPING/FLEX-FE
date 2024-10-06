import Link from 'next/link';
import { TITLE } from '../constants/main';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      <Link href="/test">{TITLE}</Link>
    </div>
  );
}
