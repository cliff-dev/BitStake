'use client';

import React, { createContext, useState, ReactNode } from 'react';

type UserData = {
  profile: { name: string };
  walletAddress: string;
} | null;

type UserContextType = {
  userData: UserData;
  connectWallet: () => void;
};

export const UserContext = createContext<UserContextType>({
  userData: null,
  connectWallet: () => {},
});

export function UserProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<UserData>(null);

  // Simulate a wallet connection
  const connectWallet = () => {
    setTimeout(() => {
      setUserData({
        profile: { name: 'Alice' },
        walletAddress: '0x123...ABC',
      });
    }, 1000);
  };

  return (
    <UserContext.Provider value={{ userData, connectWallet }}>
      {children}
    </UserContext.Provider>
  );
}
