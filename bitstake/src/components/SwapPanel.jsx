"use client";

import React, { useState } from "react";

export default function SwapPanel() {
  const [fromToken, setFromToken] = useState("vDot");
  const [toToken, setToToken] = useState("vEth");
  const [swapAmount, setSwapAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSwap = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    // Simulate a blockchain swap transaction
    setTimeout(() => {
      setLoading(false);
      setMessage(
        `Successfully swapped ${swapAmount} from ${fromToken} to ${toToken}!`
      );
      setSwapAmount("");
    }, 1500);
  };

  return (
    <div className="bg-neutral-200 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto text-neutral-600">
      <h2 className="text-xl font-bold mb-4">Swap Tokens</h2>
      <form onSubmit={handleSwap} className="flex flex-col gap-4">
        <div>
          <label htmlFor="fromToken" className="block text-neutral-600 mb-1">
            From Token
          </label>
          <select
            id="fromToken"
            value={fromToken}
            onChange={(e) => setFromToken(e.target.value)}
            className="w-full p-2 rounded border border-neutral-200 bg-neutral-300 text-neutral-600"
          >
            <option>vDot</option>
            <option>vEth Token</option>
          </select>
        </div>
        <div>
          <label htmlFor="toToken" className="block text-neutral-300 mb-1">
            To Token
          </label>
          <select
            id="toToken"
            value={toToken}
            onChange={(e) => setToToken(e.target.value)}
            className="w-full p-2 rounded border border-neutral-200 bg-neutral-300 text-neutral-600"
          >
            <option>Other Token</option>
            <option>Bifrost Liquid Token</option>
          </select>
        </div>
        <div>
          <label htmlFor="swapAmount" className="block text-neutral-300 mb-1">
            Amount
          </label>
          <input
            type="number"
            id="swapAmount"
            placeholder="0.0"
            value={swapAmount}
            onChange={(e) => setSwapAmount(e.target.value)}
            className="w-full p-2 rounded border border-neutral-200 bg-neutral-300 text-neutral-100"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-green-500 to-teal-500 hover:opacity-90 transition-opacity text-white py-2 rounded disabled:opacity-50"
        >
          {loading ? "Processing..." : "Swap Now"}
        </button>
      </form>
      {message && <p className="mt-4 text-green-400">{message}</p>}
    </div>
  );
}
