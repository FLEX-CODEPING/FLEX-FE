'use client';

import LoginModal from '@/app/components/common/LoginModal';
import { useUser } from '@/app/utils/useUser';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useUser();

  return (
    <div>
      {!user?.isSuccess && <LoginModal />}
      {children}
    </div>
  );
}
