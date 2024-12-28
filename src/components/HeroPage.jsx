import React, { useState } from "react";
import { SeedPhraseButton } from "./SeedPhraseButton";
import { SeedPhrase } from "./SeedPhrase"; 
import { EthWallet } from './EthWallet'; 
import { SolanaWallet } from './SolanaWallet'; 

export const HeroPage = () => {
  const [mnemonic, setMnemonic] = useState(""); 
  const [selectedBlockchain, setSelectedBlockchain] = useState(null);


  const handleEthWallet = () => {
    setSelectedBlockchain("ETH"); 
  };

  const handleSolanaWallet = () => {
    setSelectedBlockchain("SOL");
  };

  const handleCreateWallet = () => {
    if (!selectedBlockchain) {
      alert("Please select a blockchain (ETH or SOL) first.");
      return;
    }

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black to-gray-900 py-10">
      <p className="text-center text-white text-3xl sm:text-4xl font-semibold mt-5 px-6">
        <strong>SUPPORTS ETH & SOL</strong>
      </p>

      <p className="text-center text-white text-lg sm:text-xl mt-3 mb-8 px-6">
        Start your journey by selecting your preferred blockchain.
      </p>


      <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-x-6 sm:space-y-0 ">
        <div 
          onClick={handleEthWallet} 
          className={`text-center bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl cursor-pointer ${
            selectedBlockchain === "ETH" ? "border-4 border-blue-500" : ""
          }`}
        >
          <div className="text-xl font-semibold text-gray-800">ETH</div>
          <img
            src="https://cryptologos.cc/logos/ethereum-eth-logo.svg"
            alt="ETH Logo"
            className="w-24 h-24 bg-white rounded-full shadow-md mx-auto mt-4 mb-4 transition duration-300 ease-in-out transform hover:scale-110"
          />
        </div>

        <div 
          onClick={handleSolanaWallet} 
          className={`text-center bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl cursor-pointer ${
            selectedBlockchain === "SOL" ? "border-4 border-green-500" : ""
          }`}
        >
          <div className="text-xl font-semibold text-gray-800">SOL</div>
          <img
            src="https://cryptologos.cc/logos/solana-sol-logo.svg"
            alt="SOL Logo"
            className="w-24 h-24 bg-white rounded-full shadow-md mx-auto mt-4 mb-4 transition duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
      </div>

      {mnemonic && <SeedPhrase mnemonic={mnemonic} />} 


      {!selectedBlockchain && (
        <p className="text-center text-white text-lg sm:text-xl mt-3 px-6">
          Please select either Ethereum (ETH) or Solana (SOL) to create a wallet.
        </p>
      )}


      {selectedBlockchain === "ETH" && mnemonic && <EthWallet mnemonic={mnemonic} />}
      {selectedBlockchain === "SOL" && mnemonic && <SolanaWallet mnemonic={mnemonic} />}


      {selectedBlockchain && (
       
      <SeedPhraseButton setMnemonic={setMnemonic} /> 

      )}
    </div>
  );
};
