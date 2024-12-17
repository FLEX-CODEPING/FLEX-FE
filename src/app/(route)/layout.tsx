import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ToastContainer } from 'react-toastify';
import Header from '../components/common/layout/Header';
import Rum from '../components/common/layout/Rum';
import UserProvider from '../components/common/layout/useProvider';
import 'react-toastify/dist/ReactToastify.css';
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
    <html lang="ko">
      <body
        className={`${pretendard.variable} min-w-[1100px] mx-auto font-pretendard`}
      >
        <Rum>
          <UserProvider>
            <Header />
            {children}
            <ToastContainer
              position="top-right" // 알림 위치
              autoClose={3000} // 3초 후 자동 닫힘
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </UserProvider>
        </Rum>
      </body>
    </html>
  );
}
