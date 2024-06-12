
import {
  useContractWrite,
  useContract,
  Web3Button,
  useAddress,
} from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import keccak256 from "keccak256";
import freeClaimList from "../utils/db/freeClaimList.json";
import {generateMerkleTree, generateProof} from "../utils/generateMerkleRoot"
import styles from "../styles/Home.module.css";
import { CONTRACT_ADDRESS } from "../utils/constants";

function ClaimButton() {
  const address = useAddress();
  const [hexProof, setHexProof] = useState<string[]>([]);
  const [amount, setAmount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { contract } = useContract(CONTRACT_ADDRESS);
  const { mutateAsync } = useContractWrite(contract, "whitelistSale");
  
  useEffect(() => {
    setError("");
    if (address) {
      // Read data from json file
      const rawData: Record<string, number> = freeClaimList;

      // Create merkle tree from list of available claims
      const [merkleRoot, merkleTree] = generateMerkleTree(rawData);
      const userAmount = rawData[address];

      if (userAmount !== undefined) {
        const proof = generateProof(address, userAmount, merkleTree);
        setHexProof(proof);
        setAmount(userAmount);
      } else {
        setError("Address not found in whitelist, please contact the team if you consider this an error.");
      }
    }
  }, [address, hexProof]);

  return (
    <div className="space-y-8 px-20">
      {error ? 
        <p className="text-4xl font-bold text-blue-400">
          <div className={`${styles.gradientText2}`}>
            {error}
          </div>
          
        </p>
        :
        <div>
          <p className={`${styles.gradientText2} mb-10 text-4xl font-bold`}>You are eligible to claim airdrop</p>
          <div className="text-4xl font-bold text-blue-400 animate-bounce flex flex-row space-x-2">
            <p className={`${styles.gradientText1}`}>Press this</p>
            <svg className="my-auto" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      }
      <Web3Button
        contractAddress={CONTRACT_ADDRESS}
        action={() => mutateAsync({
          args: [
            hexProof,
            amount
          ]
        })}
        className={`hover:scale-105 !rounded-xl shadow-xl shadow-blue-300 !px-12 ${address?"!bg-slate-900":""} !border-white !border`}
      > 
        {address?<div className={`font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-b from-[#bfa3da] via-[#84309c] to-[#c735b0]`}>
          Claim reward
        </div>:
        <div className={`bg-gradient-to-b from-[#bfa3da] via-[#84309c] to-[#c735b0]`}>
          <p className="font-bold text-2xl !text-white ">Connect Wallet</p>
        </div>}
      </Web3Button>
    </div>
  );
}

export default ClaimButton;
