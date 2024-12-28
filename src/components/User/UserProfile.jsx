import { Balance } from './Balance';
import { Wallets } from './Wallets';
import { TransactionHistory } from './TransactionHistory';

export const UserProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <div className="flex flex-col items-center justify-center pt-20 pb-10">
        <h1 className="text-3xl font-bold mb-8 text-center">Welcome to Your Profile</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 w-full">
          {/* Balance Section */}
          <div className="w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <Balance />
          </div>

          {/* Wallets Section */}
          <div className="w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <Wallets />
          </div>

          {/* Transaction History Section */}
          <div className="w-full sm:col-span-2 lg:col-span-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <TransactionHistory />
          </div>
        </div>
      </div>
    </div>
  );
};
