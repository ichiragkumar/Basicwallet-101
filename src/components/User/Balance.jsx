export const Balance = () => {
  const balances = [
    {

      name: 'ETH',
      icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
      balance: '0.00',
    },
    {

      name: 'SOL',
      icon: 'https://cryptologos.cc/logos/solana-sol-logo.svg',
      balance: '0.00',
    },
    {

      name: 'BTC',
      icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg',
      balance: '0.00',
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Balances</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {balances.map((balance, index) => (
          <div key={index} className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
          <img src={balance.icon} alt={balance.name} className="w-20 h-20 mb-4 mx-auto" />
            {/* Display shortName if name is too long, otherwise display the full name */}
            <p className="text-xl font-semibold  w-full">
              {balance.name.length > 10 ? balance.shortName : balance.name}
            </p>
            <p className="text-sm text-gray-400">{balance.balance}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
