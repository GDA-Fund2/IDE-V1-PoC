import React from 'react'
import { ethers } from "ethers";

export default function MetaMaskSigner() {

    const signRandomNonce = async () => {
        try {
          const nonce = Math.floor(Math.random() * 9999999)
          const nonceText = `Hello, login by signing this nonce: ${nonce}`
          console.log({ nonceText });
          if (!window.ethereum)
            throw new Error("No crypto wallet found. Please install it.");
      
          await window.ethereum.send("eth_requestAccounts");
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const signature = await signer.signMessage(nonceText);
          const address = await signer.getAddress();

          const msgHash = ethers.utils.hashMessage(nonceText);
          const msgHashBytes = ethers.utils.arrayify(msgHash);

          const recoveredAddress = ethers.utils.recoverAddress(msgHashBytes, signature);

          console.log( {
                message: nonceText,
                signature: signature,
                address: address,
                recoveredAddress: recoveredAddress
          })
          return {
            nonceText,
            signature,
            address
          };
        } catch (err) {
          console.log(err.message);
        }
      };
      

    return (
        <button className="metamask-button" onClick={signRandomNonce}>
            <h1 className="button-text">Sign in with Metamask</h1>
            <img className="metamask-logo" src={require('../resources/MetaMask_Fox.svg.png')} alt="metamask-logo"/>
        </button>
    )
}
