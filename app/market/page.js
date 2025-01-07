"use client";

import React, { useEffect, useRef } from "react";

export default function Market() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "width": "100%",
          "height": "610",
          "autosize": true,
          "symbol": "NASDAQ:AAPL",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-black text-blue-500 px-6 py-4">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">EMOJICOIN.FUN v1.0.0</h1>
        <nav className="flex space-x-4 text-sm">
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

      {/* Main Content */}
      <main className="grid grid-cols-12 gap-6">
        {/* Left Section: Coin Info and Chart */}
        <div className="col-span-12 md:col-span-8 space-y-6">
          {/* Coin Info */}
          <div className="bg-black border border-blue-500 p-4 rounded-lg flex justify-between">
            <div className="space-y-2">
              <p>
                MARKET CAP: <span className="text-white">2,107.36 🚀</span>
              </p>
              <p>
                24 HOUR VOL: <span className="text-white">2.51 🚀</span>
              </p>
              <p>
                ALL-TIME VOL: <span className="text-white">239,586.38 🚀</span>
              </p>
            </div>
            <div>
              <img
                src="https://em-content.zobj.net/thumbs/160/apple/325/frog_1f438.png"
                alt="Frog Coin"
                className="w-20 h-20"
              />
            </div>
          </div>

          {/* TradingView Chart Widget */}
          <div className="bg-black border border-blue-500 p-4 rounded-lg">
            <div
              className="tradingview-widget-container"
              ref={container}
              style={{ height: "100%", width: "100%" }}
            >
              <div
                className="tradingview-widget-container__widget"
                style={{ height: "calc(100% - 32px)", width: "100%" }}
              ></div>
              <div className="tradingview-widget-copyright">
                <a
                  href="https://www.tradingview.com/"
                  rel="noopener nofollow"
                  target="_blank"
                >
                  <span className="blue-text">
                    Track all markets on TradingView
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Transaction Table */}
          <div className="bg-black border border-blue-500 p-4 rounded-lg overflow-x-auto">
            <table className="table-auto w-full text-sm">
              <thead className="text-left text-gray-400 border-b border-blue-500">
                <tr>
                  <th>RANK</th>
                  <th>APT</th>
                  <th>EMOJI</th>
                  <th>TIME</th>
                  <th>PRICE</th>
                  <th>SENDER</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr>
                  <td>1</td>
                  <td>13.04</td>
                  <td>🐸</td>
                  <td>18:06:35</td>
                  <td className="text-green-500">0.000066500</td>
                  <td>0x2AL...70F3</td>
                </tr>
                {/* Additional rows */}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Section: Wallet Interaction */}
        <div className="col-span-12 md:col-span-4 space-y-6">
          {/* Wallet Interaction */}
          <div className="bg-black border border-blue-500 p-4 rounded-lg space-y-4">
            <div className="text-center">
              <p className="text-sm text-gray-400">YOU PAY</p>
              <input
                type="number"
                className="w-full p-2 text-lg rounded-md bg-black border border-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="1"
              />
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-400">YOU RECEIVE</p>
              <p className="text-lg font-bold text-green-400">14,669.6478 🐸</p>
            </div>
            <button className="w-full py-2 bg-blue-500 text-black rounded-md hover:bg-blue-400">
              CONNECT WALLET
            </button>
          </div>

          {/* Emoji Input Section */}
          <div className="bg-black border border-blue-500 p-4 rounded-lg">
            <div className="grid grid-cols-10 gap-2">
              {Array.from({ length: 80 }).map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-blue-500 text-black flex items-center justify-center cursor-pointer hover:bg-blue-400"
                >
                  🚀
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-8 text-center text-sm text-gray-400">
        <p>EMOJICOIN.FUN v1.0.0</p>
        <p>TERMS OF USE</p>
      </footer>
    </div>
  );
}
