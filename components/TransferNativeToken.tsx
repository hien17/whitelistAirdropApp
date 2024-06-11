import { useTransferNativeToken } from "@thirdweb-dev/react";

const TransferNativeToken = () => {
    const {
      mutate: transferNativeToken,
      isLoading,
      error,
    } = useTransferNativeToken();
  
    if (error) {
      console.error("failed to transfer tokens", error);
    }
  
    return (
      <button
        disabled={isLoading}
        onClick={() =>
          transferNativeToken({
            to: "0xd0Cd8C44CF7530dD192575Ae1a6D5FE97c4dC35F",
            amount: "0.02",
          })
        }
        style={{
          padding: '16px 50px',
          borderRadius: '12px',
          fontSize: '16px',
        }}
      >
        Transfer
      </button>
    );
  };

  export default TransferNativeToken
  