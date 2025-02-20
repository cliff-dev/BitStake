"use client";

import React from "react";
import Image from "next/image";

const stakingData = [
  {
    symbol: "vDOT",
    apy: "12.09%",
    tvs: "—",
    myStaking: "200 DOT",
    dailyReward: "1 DOT",
    icon: "/icons/vdot.svg",
  },
  {
    symbol: "vASTR",
    apy: "11.72%",
    tvs: "—",
    myStaking: "50 ASTR",
    dailyReward: "0.5 ASTR",
    icon: "/icons/vastr.svg",
  },
  {
    symbol: "vMANTA",
    apy: "20.57%",
    tvs: "—",
    myStaking: "12 MANTA",
    dailyReward: "0.3 MANTA",
    icon: "/icons/vmanta.svg",
  },
  {
    symbol: "vETH",
    apy: "5.022%",
    tvs: "$ 2.3418 M",
    myStaking: "0.5 ETH",
    dailyReward: "0.0002 ETH",
    icon: "/icons/veth.svg",
  },
  {
    symbol: "vBNC",
    apy: "6.07%",
    tvs: "—",
    myStaking: "100 BNC",
    dailyReward: "2 BNC",
    icon: "/icons/vbnc.svg",
  },
  {
    symbol: "vGLMR",
    apy: "8.38%",
    tvs: "—",
    myStaking: "—",
    dailyReward: "—",
    icon: "/icons/vglmr.svg",
  },
  {
    symbol: "vPHA",
    apy: "24.85%",
    tvs: "$ 8.6834 M",
    myStaking: "100 PHA",
    dailyReward: "2.5 PHA",
    icon: "/icons/vpha.svg",
  },
  {
    symbol: "vFIL",
    apy: "3653.72%",
    tvs: "—",
    myStaking: "—",
    dailyReward: "—",
    icon: "/icons/vfil.svg",
  },
];

export default function StakingOverview() {
  const myTotalStaking = "1,000 BNC";
  const myEstDailyReward = "5 BNC";
  const myOverallAPY = "8.5%";
  const myOverallTVS = "$10,000";

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-neutral-100 text-neutral-600 p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">My Total Staking</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col">
            <span className="text-sm text-neutral-400">Staked</span>
            <span className="text-lg font-semibold">{myTotalStaking}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-neutral-400">Est. Daily Reward</span>
            <span className="text-lg font-semibold">{myEstDailyReward}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-neutral-400">Overall APY</span>
            <span className="text-lg font-semibold">{myOverallAPY}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-neutral-400">TVS</span>
            <span className="text-lg font-semibold">{myOverallTVS}</span>
          </div>
        </div>
      </div>

      <div className="bg-neutral-100 text-neutral-600 p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Available Staking Tokens</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-neutral-300">
                <th className="py-2 px-4">Token</th>
                <th className="py-2 px-4">APY</th>
                <th className="py-2 px-4">TVS</th>
                <th className="py-2 px-4">Est. Daily Reward</th>
                <th className="py-2 px-4">My Staking</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {stakingData.map((token) => (
                <tr key={token.symbol} className="border-b border-neutral-300">
                  <td className="py-2 px-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src={token.icon}
                        alt={`${token.symbol} icon`}
                        width={20}
                        height={20}
                      />
                      <span>{token.symbol}</span>
                    </div>
                  </td>

                  <td className="py-2 px-4">
                    <span className="text-green-600 font-semibold">
                      {token.apy}
                    </span>
                  </td>
                  <td className="py-2 px-4">{token.tvs}</td>
                  <td className="py-2 px-4">{token.dailyReward}</td>
                  <td className="py-2 px-4">{token.myStaking}</td>
                  <td className="py-2 px-4">
                    <button
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 text-white text-sm px-3 py-1 rounded"
                      onClick={() => alert(`Staking ${token.symbol}...`)}
                    >
                      Stake
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
