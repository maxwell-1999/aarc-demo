import { BigNumber, ethers } from "ethers";
import {AarcSDK} from "aarc-sdk";
import { RPC_URL, PRIVATE_KEY, API_KEY } from "../constants";

export const tokensTransfer = async () => {
  let provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  let signer = new ethers.Wallet(PRIVATE_KEY, provider);
  let eoaAddress = signer.address;  

  let aarcSDK = new AarcSDK({
    chainId: 5,
    rpcUrl: RPC_URL,
    apiKey: API_KEY,
  });

  let balances = await aarcSDK.fetchBalances(eoaAddress);
  console.log(balances);

  let safes = await aarcSDK.getAllSafes(eoaAddress);
  console.log(safes);

  await aarcSDK.executeMigration({
    senderSigner: signer,
    receiverAddress: "0x786E6045eacb96cAe0259cd761e151b68B85bdA7",
    transferTokenDetails: [
      { tokenAddress: "0x2055b06db421f17c19c655fd4a1c325e8514af67", amount: BigNumber.from(500000000) }, // 5
      { tokenAddress: "0xbb8db535d685f2742d6e84ec391c63e6a1ce3593", amount: BigNumber.from("700000000") }, // 2
      { tokenAddress: "0xf4ca1a280ebccdaebf80e3c128e55de01fabd893", amount: BigNumber.from("900000000") }, // 1
    ]
  })
}

export const allTokensTransfer = async () => {
  let provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  let signer = new ethers.Wallet(PRIVATE_KEY, provider);  
  let eoaAddress = signer.address;

  let aarcSDK = new AarcSDK({
    chainId: 5,
    rpcUrl: RPC_URL,
    apiKey: API_KEY,
  });

  let balances = await aarcSDK.fetchBalances(eoaAddress);
  console.log(balances);

  let safes = await aarcSDK.getAllSafes(eoaAddress);
  console.log(safes);

  await aarcSDK.executeMigration({
    senderSigner: signer,
    receiverAddress:"0x786E6045eacb96cAe0259cd761e151b68B85bdA7",
    // tokenAndAmount:[]
  })
}

export const nativeTokenTransfer = async () => {
  let provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  let signer = new ethers.Wallet(PRIVATE_KEY, provider);  
  let eoaAddress = signer.address;

  let aarcSDK = new AarcSDK({
    chainId: 5,
    rpcUrl: RPC_URL,
    apiKey: API_KEY,
  });

  // await aarcSDK.init();

  let balances = await aarcSDK.fetchBalances(eoaAddress);
  console.log(balances);

  let safes = await aarcSDK.getAllSafes(eoaAddress);
  console.log(safes);

  await aarcSDK.executeMigration({
    senderSigner: signer,
    receiverAddress:"0x786E6045eacb96cAe0259cd761e151b68B85bdA7",
    transferTokenDetails:[
      {tokenAddress:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",amount:BigNumber.from("10000000000000")},
      // {tokenAddress:"0x022e292b44b5a146f2e8ee36ff44d3dd863c915c",amount:BigNumber.from("20000000000000000")},
    ]
  })
}

export const nftTokenTransfer = async () => {
  let provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  let signer = new ethers.Wallet(PRIVATE_KEY, provider);  
  let eoaAddress = signer.address;

  let aarcSDK = new AarcSDK({
    chainId: 5,
    rpcUrl: RPC_URL,
    apiKey: API_KEY,
  });

  // await aarcSDK.init();

  let balances = await aarcSDK.fetchBalances(eoaAddress);
  console.log(balances);

  for (let i = 0; i < balances.data.length; i++) {
    let token = balances.data[i];
    if (token.nft_data) {
      console.log(token.nft_data);
    }
  }

  let safes = await aarcSDK.getAllSafes(eoaAddress);
  console.log(safes);

  await aarcSDK.executeMigration({
    senderSigner: signer,
    receiverAddress:"0x786E6045eacb96cAe0259cd761e151b68B85bdA7",
    transferTokenDetails:[
      {tokenAddress:"0x932ca55b9ef0b3094e8fa82435b3b4c50d713043",tokenIds:["28507", "28508"]},
      {tokenAddress:"0xbb8db535d685f2742d6e84ec391c63e6a1ce3593",amount:BigNumber.from("20000000000")},
    ]
    // nftAndTokenId:[
    //   {tokenAddress:"0x932ca55b9ef0b3094e8fa82435b3b4c50d713043", tokenId: "1"},
    // ]
  })
}
