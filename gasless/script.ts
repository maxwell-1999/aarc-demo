import { BigNumber, ethers } from "ethers";
import { AarcSDK } from "aarc-sdk";
import { RPC_URL, PRIVATE_KEY, API_KEY, GELATO_API_KEY } from "../constants";

export const gaslessTokensTransfer = async () => {
  let provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  let signer = new ethers.Wallet(PRIVATE_KEY, provider);
  let eoaAddress = signer.address;

  let aarcSDK = new AarcSDK({
    rpcUrl: RPC_URL,
    chainId: 5,
    apiKey: API_KEY,
  });

  let balances = await aarcSDK.fetchBalances(eoaAddress);
  console.log(balances);

  let safes = await aarcSDK.getAllSafes(eoaAddress);
  console.log(safes);

  await aarcSDK.executeMigrationGasless({
    senderSigner: signer,
    receiverAddress: "0x89e2af300bCf6071068de29AEb92b4f9D97e1f11",
    transferTokenDetails: [
      {
        tokenAddress: "0xda11d2c3b026561cce889ff5a020eae21308058c",
        amount: BigNumber.from("1000000"),
      },
    ],
    gelatoApiKey: GELATO_API_KEY,
  });
};

export const gaslessSingleTokenTransfer = async () => {
  console.log("sending");
  let provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  let signer = new ethers.Wallet(PRIVATE_KEY, provider);
  let aarcSDK = new AarcSDK({
    rpcUrl: RPC_URL,
    chainId: 421613,
    apiKey: API_KEY,
  });
  await aarcSDK.executeMigrationGasless({
    senderSigner: signer,
    receiverAddress: "0x89e2af300bCf6071068de29AEb92b4f9D97e1f11",
    transferTokenDetails: [
      {
        tokenAddress: "0xda11d2c3b026561cce889ff5a020eae21308058c",
        amount: BigNumber.from("1000000"),
      },
    ],
    gelatoApiKey: GELATO_API_KEY,
  });
};
