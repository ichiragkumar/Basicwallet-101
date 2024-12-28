import React, { useState } from "react";
import { SeedPhraseButton } from "./SeedPhraseButton";
import { SeedPhrase } from "./SeedPhrase";

export const HeroPage = () => {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black to-gray-900 py-10">
      <p className="text-center text-white text-3xl sm:text-4xl font-semibold mt-5 px-6">
        <strong>SUPPORTS ETH & SOL</strong>
      </p>

      <p className="text-center text-white text-lg sm:text-xl mt-3 mb-8 px-6">
        Start your journey by selecting your preferred blockchain.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-x-6 sm:space-y-0">
        {/* Ethereum */}
        <div className="text-center bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
          <div className="text-xl font-semibold text-gray-800">ETH</div>
          <img
            src="https://cryptologos.cc/logos/ethereum-eth-logo.svg"
            alt="ETH Logo"
            className="w-24 h-24 bg-white rounded-full shadow-md mx-auto mt-4 mb-4 transition duration-300 ease-in-out transform hover:scale-110"
          />
        </div>

        {/* Solana */}
        <div className="text-center bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
          <div className="text-xl font-semibold text-gray-800">SOL</div>
          <img
            src="https://cryptologos.cc/logos/solana-sol-logo.svg"
            alt="SOL Logo"
            className="w-24 h-24 bg-white rounded-full shadow-md mx-auto mt-4 mb-4 transition duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
      </div>

      <SeedPhraseButton setMnemonic={setMnemonic} />

      {mnemonic && <SeedPhrase mnemonic={mnemonic} />}
    </div>
  );
};
