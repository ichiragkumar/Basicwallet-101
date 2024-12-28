import React, { useState } from "react";
import { generateMnemonic } from "bip39";

export const SeedPhraseButton = ({ setMnemonic }) => {
  const handleGenerateMnemonic = async () => {
    const mn = generateMnemonic(); 
    setMnemonic(mn);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <button
        onClick={handleGenerateMnemonic}
        className="bg-black-500 text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition duration-300"
      >
        Create Seed Phrase
      </button>
    </div>
  );
};
