import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/common/layout/Header';
import TanStackProvider from '../components/common/layout/TanstackProvider';
import UserProvider from '../components/common/layout/useProvider';
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
        <TanStackProvider>
          <UserProvider>
            <Header />
            {children}
            <ToastContainer
              position="top-right" 
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </UserProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
