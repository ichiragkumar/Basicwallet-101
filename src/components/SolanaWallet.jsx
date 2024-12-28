import React, { useState, useEffect } from "react";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";
import { Link } from "react-router-dom";

export const SolanaWallet = ({ mnemonic }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [publicKeys, setPublicKeys] = useState([]);
  const [privateKeys, setPrivateKeys] = useState([]);
  const [secretPhrases, setSecretPhrases] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null); 

  useEffect(() => {
    if (mnemonic) {
      generateSolanaWallet(); 
    }
  }, [mnemonic]);


  const generateSolanaWallet = () => {
    const seed = mnemonicToSeed(mnemonic);
    const path = `m/44'/501'/${currentIndex}'/0'`;
    const derivedSeed = derivePath(path, seed.toString("hex")).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const keypair = Keypair.fromSecretKey(secret);


    setPublicKeys((prevKeys) => [...prevKeys, keypair.publicKey]);
    setPrivateKeys((prevKeys) => [...prevKeys, secret.toString('hex')]);
    setSecretPhrases((prevPhrases) => [...prevPhrases, mnemonic]);

    setCurrentIndex(currentIndex + 1);
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
        {publicKeys.length > 0 ? (
          publicKeys.map((key, index) => (
            <div key={index} className="relative flex items-center space-x-3 py-2">

              <img
                src="https://cryptologos.cc/logos/solana-sol-logo.svg"
                alt="Solana Wallet"
                className="w-6 h-6"
              />

              <span>{truncateAddress(key.toBase58())}</span>

              <button
                className="ml-2 text-blue-500"
                onClick={() => toggleDropdown(index)} 
              >
                ▼
              </button>


              {isDropdownOpen === index && (
                <div className="absolute bg-white text-black p-2 rounded-lg shadow-md mt-2">
                  <div>
                    <p className="text-sm">Public Key: {key.toBase58()}</p>
                    <p className="text-sm">
                      Private Key:{" "}
                      <span className="text-xs">{privateKeys[index]}</span>
                    </p>
                    <p className="text-sm">
                      Secret Phrase:{" "}
                      <span className="text-xs">{secretPhrases[index]}</span>
                    </p>
                    <Link
                      to="/userprofile"
                      className="text-blue-500 text-xs"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>Generating Solana wallet...</p>
        )}
      </div>
    </div>
  );
};
