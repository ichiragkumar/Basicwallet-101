import React from 'react';

export const SeedPhrase = ({ mnemonic }) => {
  const mnemonicWords = mnemonic.split(' '); 

  return (
    <div className="mt-4 p-6 bg-white shadow-lg rounded-lg w-full max-w-md text-center">
      <p className="text-xl font-semibold mb-4">Your Seed Phrase</p>
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

      <div className='flex flex-col items-center justify-center mt-4'>
        <div className='p-3'>Copy to clipboard</div>
        <button className="bg-white-500 border border-1 border-gray-700 text-black py-2 px-6 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300">
          Copy
          </button>
      </div>
    </div>
  );
};
