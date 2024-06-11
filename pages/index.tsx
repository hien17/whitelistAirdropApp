import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import TransferNativeToken from "../components/TransferNativeToken";
import Withdraw from "../components/Withdraw";
import WhitelistAirdrop from "./WhitelistAirdrop/page";
import ClaimButton from "../components/ClaimButton";
import { useEffect, useState } from "react";
// import { checkTree, generateMerkleTree, readRawList } from '../utils/generateMerkleRoot';

const Home: NextPage = () => {
  const address = useAddress();
  return (
    <main className={`${styles.main} p-20 space-y-20 w-full`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={`${styles.title} font-bold`}>
            Claim {" "}
            <span className={styles.gradientText0}>
              NFT
              {" "}
            </span>
            Airdrop
          </h1>

          {/* <p className={styles.description}>
            Get started by configuring your desired network in{" "}
            <code className={styles.code}>src/index.js</code>, then modify the{" "}
            <code className={styles.code}>src/App.js</code> file!
          </p> */}

          {/* <div style={{marginBottom: '20px'}}>
            {address}
          </div>

          <div className={styles.connect}>
            <ConnectWallet />
          </div> */}
        </div>
        {/* <TransferNativeToken/>
        <br/> <br/>
        <Withdraw/>
        <div style={{marginBottom: '20px'}}></div>
        <div style={{
          padding: '10px 12px',
          border: '1px solid',
          width: '190px',
          borderRadius: '8px',
          paddingTop: '10px',
          justifySelf: 'center',
          margin: '0 auto',
        }}>
          <div style={{margin: 'auto auto',}}>
            To Page Presentation
          </div>
        </div> */}
      </div>
        <ClaimButton/>
    </main>
  );
};

export default Home;
