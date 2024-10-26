'use client';

import { useUserStore } from '@/app/store/scoreStore';
import { ReactNode, useEffect } from 'react';

export default function UserProvider({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  const fetchUser = useUserStore((state) => state.fetchUser);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return children;
}
