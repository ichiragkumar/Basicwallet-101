import React, { useState, useEffect } from "react";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";
import { HomePage } from "./HomePage";

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


    setPublicKeys((prevKeys) => [...prevKeys, keypair.publicKey.toString()]);
    setPrivateKeys((prevKeys) => [...prevKeys, secret.toString("hex")]);
    setSecretPhrases((prevPhrases) => [...prevPhrases, mnemonic]);

    setCurrentIndex(currentIndex + 1);
  };

 
  const UserWalletDetails = {
    walletName: "SOL",
    publicWalletAddress: publicKeys[0],
    privateWalletAddress: privateKeys[0],
    secretPhrase: mnemonic,
  };

  return <HomePage UserWalletDetails={UserWalletDetails} />;
};
