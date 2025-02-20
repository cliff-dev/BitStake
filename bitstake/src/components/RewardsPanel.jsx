"use client";

import React, { useState, useEffect } from "react";

export default function RewardsPanel() {
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRewards([
        { id: 1, date: "2025-02-10", amount: "10.5 vDot" },
        { id: 2, date: "2025-02-12", amount: "5.0 vEth" },
        { id: 3, date: "2025-02-15", amount: "12.3 vAstr" },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="bg-neutral-800 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto text-neutral-100">
      <h2 className="text-xl font-bold mb-4">Your Rewards</h2>
      {loading ? (
        <p className="text-neutral-300">Loading rewards...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-neutral-700 text-neutral-300">
                  Date
                </th>
                <th className="py-2 px-4 border-b border-neutral-700 text-neutral-300">
                  Reward Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {rewards.map((reward) => (
                <tr key={reward.id}>
                  <td className="py-2 px-4 border-b border-neutral-700">
                    {reward.date}
                  </td>
                  <td className="py-2 px-4 border-b border-neutral-700">
                    {reward.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
