'use client';

import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  // Simulate a wallet connection (replace with your wallet logic)
  const connectWallet = async () => {
    setTimeout(() => {
      setUserData({
        profile: { name: 'Alice' },
        walletAddress: '0x123...ABC'
      });
    }, 1000);
  };

  return (
    <UserContext.Provider value={{ userData, connectWallet }}>
      {children}
    </UserContext.Provider>
  );
};
