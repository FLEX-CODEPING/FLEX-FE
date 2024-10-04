import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Flex',
  description: '내 곁에 든든한 재테크 친구! Flex',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="min-h-screen min-w-[800px] mx-auto">
      <body>{children}</body>
    </html>
  );
}
