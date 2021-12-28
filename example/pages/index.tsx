import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { NftGallery } from 'react-nft-gallery';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { providers, ethers } from 'ethers';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [web3Provider, setWeb3Provider] = useState<providers.Web3Provider>();

  const enableProvider = async () => {
    //  Create WalletConnect Provider
    const provider = new WalletConnectProvider({
      infuraId: '0fb70b3861104a29bb2f497a45cb34eb',
    });

    try {
      //  Enable session (triggers QR Code modal)
      await provider.enable();
      setWeb3Provider(new providers.Web3Provider(provider));
    } catch (error) {
      console.error(error);
    }
  };

  const getAccounts = async () => {
    const accounts = await web3Provider?.listAccounts();
    console.log(accounts);
  };

  useEffect(() => {
    if (web3Provider) {
      web3Provider.on('accountsChanged', (accounts: string[]) => {
        console.log(accounts);
      });
      getAccounts();
    }
  }, [web3Provider]);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>react-nft-gallery</h1>
        <button onClick={enableProvider}>Connect Wallet</button>

        <NftGallery ownerAddress="vitalik.eth" darkMode />
      </main>
    </div>
  );
};

export default Home;