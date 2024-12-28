export const TransactionHistory = () => {
  const transactions = [
    {
      name: 'Transfer',
      icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
      amount: '0.00',
      date: '2022-01-01'
    },
    {
      name: 'Transfer',
      icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
      amount: '0.00',
      date: '2022-01-01'
    },
    {
      name: 'Deposit',
      icon: 'https://cryptologos.cc/logos/solana-sol-logo.svg',
      amount: '0.00',
      date: '2022-02-01'
    },
    {
      name: 'Withdraw',
      icon: 'https://cryptologos.cc/logos/solana-sol-logo.svg',
      amount: '0.00',
      date: '2022-02-01'
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Transaction History</h2>
      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition-all">
            <div className="flex items-center space-x-4">
              <img src={transaction.icon} alt={transaction.name} className="w-12 h-12" />
              <div className="space-y-1">
                <p className="text-xl font-semibold">{transaction.name}</p>
                <p className="text-sm text-gray-400">{transaction.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg text-gray-200">{transaction.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
