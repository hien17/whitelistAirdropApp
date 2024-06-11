import {
    useContractWrite,
    useContract,
    Web3Button,
  } from "@thirdweb-dev/react";
  
  function Withdraw() {
    const { contract } = useContract('0xd0Cd8C44CF7530dD192575Ae1a6D5FE97c4dC35F');
    const { mutateAsync, isLoading, error } = useContractWrite(
      contract,
      "withdraw",
    );
    console.log(error);
  
    return (
      <Web3Button
        contractAddress={'0xd0Cd8C44CF7530dD192575Ae1a6D5FE97c4dC35F'}
        // Calls the "setName" function on your smart contract with "My Name" as the first argument
        action={() => mutateAsync({ args: ["30000000000000000"] })}
      >
        
        Send Transaction
      </Web3Button>
    );
  }
  export default Withdraw;
  