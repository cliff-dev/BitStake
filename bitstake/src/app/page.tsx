// File: pages/index.jsx
'use client';

import React, { useState, useContext } from 'react';
import { ArrowLeftRight, ChartLine, Shield, Wallet } from 'lucide-react';
import { UserContext } from '../context/UserContext';
import OverviewPanel from '../components/OverviewPanel';
import StakePanel from '../components/StakePanel';
import SwapPanel from '../components/SwapPanel';
import RewardsPanel from '../components/RewardsPanel';
import { FloatingDock } from '@/components/ui/floating-dock';
import {
  IconBrandGithub,
  IconBrandX,

  IconBrandTelegram,
} from "@tabler/icons-react";

// If you have a floating-dock or footer component, import it here.
// For now, we'll just show a placeholder in the pinned footer.

const Page = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const { userData, connectWallet } = useContext(UserContext);

    // Links for your FloatingDock (or any other footer content)
    const links = [
      {
        title: "Changelog",
        icon: <IconBrandTelegram className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
        href: "https://t.me/bifrost_io",
      },
      {
        title: "Twitter",
        icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
        href: "https://x.com/Bifrost",
      },
      {
        title: "GitHub",
        icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
        href: "https://github.com/bifrost-io",
      },
    ];

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      {/* Header */}
      <header className="flex justify-end p-4 text-white">
        <div className="flex items-center gap-4">
          {userData ? (
            <div className="flex items-center gap-2">
              <Wallet size={20} />
              <span className="text-sm">{userData.walletAddress}</span>
            </div>
          ) : (
            <button
              onClick={connectWallet}
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 rounded hover:opacity-90 transition-opacity"
            >
              <Wallet size={20} />
              <span>Connect Wallet</span>
            </button>
          )}
        </div>
      </header>

      {/* Main Content */}
      {/* pb-28 ensures space for the fixed footer; adjust as needed */}
      <main className="flex-grow p-8 sm:p-20 pb-28">
        <div className="text-center">
          <h2 className="text-md md:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-400 font-sans font-bold">
            Bifrost Liquid Staking
          </h2>
          <p className="text-zinc-600 text-sm mt-2">
            Stake, Swap, Track Rewards, and View Your Overview Across Multiple Chains
          </p>
        </div>

        {/* Tabs */}
        <div className="w-full max-w-4xl mx-auto mt-8">
          <div className="flex justify-center gap-8">
            <button
              onClick={() => setActiveTab('Overview')}
              className={`flex items-center gap-2 px-4 py-2 text-zinc-600 hover:opacity-90 transition-opacity ${
                activeTab === 'Overview' ? 'border-b-2 border-current' : ''
              }`}
            >
              <span>Overview</span>
            </button>
            <button
              onClick={() => setActiveTab('Stake')}
              className={`flex items-center gap-2 px-4 py-2 text-zinc-600 hover:opacity-90 transition-opacity ${
                activeTab === 'Stake' ? 'border-b-2 border-current' : ''
              }`}
            >
              <Shield width={20} height={20} />
              <span>Stake</span>
            </button>
            <button
              onClick={() => setActiveTab('Swap')}
              className={`flex items-center gap-2 px-4 py-2 text-zinc-600 hover:opacity-90 transition-opacity ${
                activeTab === 'Swap' ? 'border-b-2 border-current' : ''
              }`}
            >
              <ArrowLeftRight width={20} height={20} />
              <span>Swap</span>
            </button>
            <button
              onClick={() => setActiveTab('Rewards')}
              className={`flex items-center gap-2 px-4 py-2 text-zinc-600 hover:opacity-90 transition-opacity ${
                activeTab === 'Rewards' ? 'border-b-2 border-current' : ''
              }`}
            >
              <ChartLine width={20} height={20} />
              <span>Rewards</span>
            </button>
          </div>

          {/* Panel Container */}
          <div className="mt-8 min-h-[400px]">
            {activeTab === 'Overview' && <OverviewPanel />}
            {activeTab === 'Stake' && <StakePanel />}
            {activeTab === 'Swap' && <SwapPanel />}
            {activeTab === 'Rewards' && <RewardsPanel />}
          </div>
        </div>
      </main>

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 left-0 w-full  text-white p-2">
        <div className="flex items-center justify-center">
          <FloatingDock
            mobileClassName=""
            items={links}
          />
        </div>
      </footer>
    </div>
  );
}

export default Page;