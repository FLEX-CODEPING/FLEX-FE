import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Header from '../components/common/layout/Header';
import UserProvider from '../components/common/useProvider';
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

const DelaGothicOne = localFont({
  src: '../static/fonts/DelaGothicOne-Regular.ttf',
  display: 'swap',
  variable: '--font-DelaGothicOne',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${DelaGothicOne.variable} ${pretendard.className}`}
    >
      <body className="min-w-[1100px] mx-auto font-pretendard">
        <UserProvider>
          <Header />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
