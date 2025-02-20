"use client";

import React, { useState } from "react";

export default function StakePanel() {
  const [stakeAmount, setStakeAmount] = useState("");
  const [selectedChain, setSelectedChain] = useState("Ethereum");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleStake = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    // Simulate a blockchain staking transaction
    setTimeout(() => {
      setLoading(false);
      setMessage(`Successfully staked ${stakeAmount} on ${selectedChain}!`);
      setStakeAmount("");
    }, 1500);
  };

  return (
    <div className="border-neutral-200 bg-neutral-300 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto text-neutral-600">
      <h2 className="text-xl font-bold mb-4">Stake your Tokens</h2>
      <form onSubmit={handleStake} className="flex flex-col gap-4">
        <div>
          <label htmlFor="stakeAmount" className="block text-neutral-500 mb-1">
            Amount to Stake
          </label>
          <input
            type="number"
            id="stakeAmount"
            placeholder="0.0"
            value={stakeAmount}
            onChange={(e) => setStakeAmount(e.target.value)}
            className="w-full p-2 rounded border border-neutral-300 bg-neutral-400 text-neutral-100"
            required
          />
        </div>
        <div>
          <label htmlFor="stakeChain" className="block text-neutral-500 mb-1">
            Select Chain
          </label>
          <select
            id="stakeChain"
            value={selectedChain}
            onChange={(e) => setSelectedChain(e.target.value)}
            className="w-full p-2 rounded border border-neutral-300 bg-neutral-400 text-neutral-100"
          >
            <option>Ethereum</option>
            <option>Polkadot</option>
            <option>Cosmos</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition-opacity text-white py-2 rounded disabled:opacity-50"
        >
          {loading ? "Processing..." : "Stake Now"}
        </button>
      </form>
      {message && <p className="mt-4 text-green-400">{message}</p>}
    </div>
  );
}
