import React, { useState, useEffect } from "react";
import { mnemonicToSeed } from "bip39";
import { HDNodeWallet } from "ethers"; 
import { Wallet } from "ethers";

import { Link, useNavigate } from "react-router-dom";
import { HomePage } from "./HomePage";
export const EthWallet = ({ mnemonic }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [addresses, setAddresses] = useState([]);
  const [privateKeys, setPrivateKeys] = useState([]);
  const navigate = useNavigate();

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

  
  const UserWalletDetails = {
    walletName: "ETH",
    publicWalletAddress: addresses[0],
    privateWalletAddress: privateKeys[0],
    secretPhrase: mnemonic,
  }

  return <HomePage UserWalletDetails={UserWalletDetails} />;
};
