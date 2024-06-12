import { useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import ClaimButton from "../components/ClaimButton";

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
        </div>
      </div>
        <ClaimButton/>
    </main>
  );
};

export default Home;
