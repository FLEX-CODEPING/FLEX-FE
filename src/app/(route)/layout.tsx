import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Header from '../components/common/layout/Header';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Flex',
  description: '내 곁에 든든한 재테크 친구! Flex',
};

const pretendard = localFont({
  src: '../static/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} h-screen min-w-[800px] mx-auto font-pretendard`}
    >
      <body className="w-full h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
