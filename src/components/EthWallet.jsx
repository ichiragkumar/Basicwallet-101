import React, { useState, useEffect } from "react";
import { mnemonicToSeed } from "bip39";
import { HDNodeWallet } from "ethers"; 
import { Wallet } from "ethers";
import { Link } from "react-router-dom";

export const EthWallet = ({ mnemonic }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [addresses, setAddresses] = useState([]);
  const [privateKeys, setPrivateKeys] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null); 

  useEffect(() => {
    if (mnemonic) {
      generateEthWallet(); 
    }
  }, [mnemonic]);

  const generateEthWallet = async () => {
    const seed = await mnemonicToSeed(mnemonic);
    console.log("Generating ETH wallet with seed:", seed);

    const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
    const hdNode = HDNodeWallet.fromSeed(seed);
    const child = hdNode.derivePath(derivationPath);
    const privateKey = child.privateKey;
    const wallet = new Wallet(privateKey);

    setCurrentIndex(currentIndex + 1);
    setAddresses((prevAddresses) => [...prevAddresses, wallet.address]);
    setPrivateKeys((prevPrivateKeys) => [...prevPrivateKeys, privateKey]);
  };

  const toggleDropdown = (index) => {
    setIsDropdownOpen(isDropdownOpen === index ? null : index); 
  };

  const truncateAddress = (address) => {
    return `${address.slice(0, 5)}...${address.slice(-5)}`;
  };

  return (
    <div className="text-white">
      <div>
        {addresses.length > 0 ? (
          addresses.map((address, index) => (
            <div key={index} className="relative flex items-center space-x-3 py-2">
              <img
                src="https://cryptologos.cc/logos/ethereum-eth-logo.svg"
                alt="Ethereum Wallet"
                className="w-6 h-6"
              />
              <span>{truncateAddress(address)}</span>

              <button
                className="ml-2 text-blue-500"
                onClick={() => toggleDropdown(index)} 
              >
                ▼
              </button>


              {isDropdownOpen === index && (
                <div className="absolute bg-white text-black p-2 rounded-lg shadow-md mt-2">
                  <div>
                    <p className="text-sm">ETH Address: {address}</p>
                    <p className="text-sm">
                      Private Key:{" "}
                      <span className="text-xs">{privateKeys[index]}</span>
                    </p>
                    <p className="text-sm">
                      Secret Phrase:{" "}
                      <span className="text-xs">{mnemonic}</span>
                    </p>
                    <Link to="/userprofile" className="text-blue-500 text-xs">
                      View Profile
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>Generating ETH wallet...</p> 
        )}
      </div>
    </div>
  );
};
