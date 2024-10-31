'use client';

import LoginModal from '@/app/components/common/LoginModal';
import { useUserStore } from '@/app/store/store';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useUserStore();

  return (
    <div>
      {!user?.isSuccess && <LoginModal />}
      {children}
    </div>
  );
}
