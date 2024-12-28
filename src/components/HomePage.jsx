import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const HomePage = ({ UserWalletDetails }) => {

  return (


    <div className="bg-gray-900 text-white p-6 rounded-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6">
        {UserWalletDetails.walletName} Wallet Details
      </h2>


      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        {/* Public Wallet Address */}
        <div className="mb-4">
          <strong className="text-yellow-400">Public Wallet Address:</strong>
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-white break-all font-mono">{UserWalletDetails.publicWalletAddress}</p>
            <CopyToClipboard text={UserWalletDetails.publicWalletAddress}>
              <button className="bg-blue-600 text-white py-1 px-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Copy
              </button>
            </CopyToClipboard>
          </div>
        </div>

        {/* Private Wallet Address */}
        <div className="mb-4">
          <strong className="text-yellow-400">Private Wallet Address:</strong>
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-white break-all font-mono">{UserWalletDetails.privateWalletAddress}</p>
            <CopyToClipboard text={UserWalletDetails.privateWalletAddress}>
              <button className="bg-blue-600 text-white py-1 px-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Copy
              </button>
            </CopyToClipboard>
          </div>
        </div>

       

      </div>
      <div className="mt-6 text-center">
        <p className="text-sm text-red-500">
          <strong>Warning:</strong> Keep your private address and secret phrase safe. Do not share them with anyone.
        </p>
      </div>
    </div>
  );
};
