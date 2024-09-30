import type { Metadata } from 'next';

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
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
