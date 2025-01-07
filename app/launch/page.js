"use client";

import React, { useState } from "react";

export default function Launch() {
  const [emojiInput, setEmojiInput] = useState("");
  const [bytesUsed, setBytesUsed] = useState(0);

  const maxBytes = 10;

  const handleEmojiChange = (e) => {
    const input = e.target.value;
    const byteCount = new Blob([input]).size;

    if (byteCount <= maxBytes) {
      setEmojiInput(input);
      setBytesUsed(byteCount);
    }
  };

  return (
    <div className="min-h-screen bg-black text-blue-500 flex flex-col items-center justify-center px-6">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">EMOJICOIN.FUN v1.0.0</h1>
        <nav className="flex justify-center space-x-4 text-sm">
          <a href="#" className="hover:underline">
            HOME
          </a>
          <a href="#" className="hover:underline">
            POOLS
          </a>
          <a href="#" className="hover:underline">
            LAUNCH EMOJICOIN
          </a>
          <a href="#" className="hover:underline">
            DOCS
          </a>
          <a href="#" className="hover:underline">
            CONNECT WALLET
          </a>
        </nav>
      </header>

      <main className="bg-black p-6 rounded-lg shadow-md border border-blue-500 max-w-md w-full">
        <h2 className="text-xl font-bold text-center mb-4">SELECT EMOJIS</h2>

        {/* Emoji Input */}
        <div className="relative">
          <input
            type="text"
            value={emojiInput}
            onChange={handleEmojiChange}
            placeholder="Type your emojis here..."
            className="w-full px-4 py-2 text-lg rounded-md bg-black border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 text-white"
          />
          {emojiInput && (
            <button
              onClick={() => {
                setEmojiInput("");
                setBytesUsed(0);
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
            >
              ✖
            </button>
          )}
        </div>
        <p className="text-sm mt-2 text-pink-500">
          {bytesUsed} / {maxBytes} BYTES
        </p>

        {/* Emoji Name and Symbol */}
        <div className="text-sm mt-4">
          <p>
            EMOJICOIN NAME:{" "}
            <span className="text-gray-400">{emojiInput || "—"}</span>
          </p>
          <p>
            EMOJICOIN SYMBOL:{" "}
            <span className="text-gray-400">{emojiInput || "—"}</span>
          </p>
        </div>

        {/* Cost and Details */}
        <div className="mt-4 text-sm space-y-2">
          <p>
            COST TO DEPLOY <span className="text-blue-300">i</span>:{" "}
            <span className="text-gray-400">1.01 APT (+1 APT)</span>
          </p>
          <p>
            YOUR BALANCE <span className="text-red-500">✖</span>:{" "}
            <span className="text-gray-400">0 APT</span>
          </p>
          <p>
            GRACE PERIOD <span className="text-blue-300">i</span>:{" "}
            <span className="text-gray-400">5 MINUTES</span>
          </p>
        </div>

        {/* Connect Wallet */}
        <div className="mt-6 text-center">
          <button className="text-blue-500 underline hover:text-blue-300">
            CONNECT WALLET
          </button>
        </div>
      </main>

      <footer className="mt-12 text-center text-sm text-gray-400">
        <p>EMOJICOIN.FUN v1.0.0</p>
        <p className="mt-2">TERMS OF USE</p>
      </footer>
    </div>
  );
}
