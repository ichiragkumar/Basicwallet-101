import React, { useState } from 'react'; 
import download from '../assets/downloadseedphrase.png';
import { useNavigate } from 'react-router-dom';

export const SeedPhrase = ({ mnemonic }) => {
  const mnemonicWords = mnemonic.split(' '); 
  const [isCopied, setIsCopied] = useState(false);
  const navigate = useNavigate(); 


  function handleCopyToClipboard() {
    navigator.clipboard.writeText(mnemonic);
    setIsCopied(true);
    navigate('/home'); 
  }


  function handleToDownloadSeedPhrase() {
    const element = document.createElement('a');
    const file = new Blob([mnemonic], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'seedphrase.txt';
    document.body.appendChild(element);
    element.click();
  }

  return (
    <div className="mt-4 p-6 bg-white shadow-lg rounded-lg w-full max-w-md text-center">
      <div className="flex items-center justify-center space-x-4 mb-2">
        <p className="text-xl font-semibold">Your Seed Phrase</p>
        <img
          onClick={handleToDownloadSeedPhrase}
          src={download}
          alt="Download Seed Phrase"
          className="w-6 h-6 bg-white rounded-full cursor-pointer transition duration-300 hover:scale-110"
        />
      </div>

      <div className="grid grid-cols-3 gap-4 text-sm text-gray-700">
        {mnemonicWords.map((word, index) => (
          <div
            key={index}
            className="bg-gray-100 p-2 rounded-lg hover:bg-blue-200 cursor-pointer transition"
          >
            {word}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center mt-4">
        <div className="p-3">Copy to clipboard</div>
        <button
          onClick={handleCopyToClipboard}
          className="bg-white-500 border border-1 border-gray-700 text-black py-2 px-6 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300"
        >
          Copy
        </button>
      </div>
    </div>
  );
};
