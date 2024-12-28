import binance from '../../assets/wallets/binance.png';
import coinbase from '../../assets/wallets/coinbase.png';
import metamask from '../../assets/wallets/metamask.png';
import rainbow from '../../assets/wallets/rainbow.png';

export const Wallets = () => {
  const wallets = [
    {
      name: 'Metamask',
      icon: metamask,
      balance: '0.00',
      address: '0x1234567890123456789012345678901234567890'
    },
    {
      name: 'Coinbase',
      icon: coinbase,
      balance: '0.00',
      address: '0x1234567890123456789012345678901234567890'
    },
    {
      name: ' Rainbow Wallet',
      icon: rainbow,
      balance: '0.00',
      address: '0x1234567890123456789012345678901234567890'
    },
    {
      name: 'Binance',
      icon: binance,
      balance: '0.00',
      address: '0x1234567890123456789012345678901234567890'
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Wallets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {wallets.map((wallet, index) => (
          <div key={index} className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <img src={wallet.icon} alt={wallet.name} className="w-16 h-16 mb-4 mx-auto" />
            <p className="text-xl font-semibold">{wallet.name}</p>
            <p className="text-sm text-gray-400 truncate">{wallet.address}</p>
            <p className="text-sm text-gray-400">{wallet.balance}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
