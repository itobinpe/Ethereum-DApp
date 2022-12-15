import { ethers } from "ethers";
import React, { useState, useEffect } from 'react';

function App() {

  const [balance, setBalance] = useState();
  const [secondBalance, secondSetBalance] = useState();
  const [depositValue, setDepositValue] = useState('')
  const [secondDepositValue, secondSetDepositValue] = useState('')

  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  const secondContractAddress = "0x0165878A594ca255338adfa4d48449f69242Eb8F"

  const ABI = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_unlockTime",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "when",
          "type": "uint256"
        }
      ],
      "name": "Withdrawal",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "depositEther",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "greet",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_greeting",
          "type": "string"
        }
      ],
      "name": "setGreeting",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unlockTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
  
  const contract = new ethers.Contract(contractAddress, ABI, signer);
  const secondContract = new ethers.Contract(secondContractAddress, ABI, signer);

  useEffect(() => {
    const connectWallet = async () => {
      await provider.send("eth_requestAccounts", []);
    }

    const getBalance = async () => {
      const balance = await provider.getBalance(contractAddress)
      const formattedBalance = ethers.utils.formatEther(balance)
      setBalance(formattedBalance)
    }

    const secondGetBalance = async () => {
      const secondBalance = await provider.getBalance(secondContractAddress)
      const formattedBalance = ethers.utils.formatEther(secondBalance)
      secondSetBalance(formattedBalance)
    }

    connectWallet()
      .catch(console.error);

    secondGetBalance()
      .catch(console.error);

    getBalance()
      .catch(console.error);
  })

  const handleDepositChange = (e) => {
    setDepositValue(e.target.value);
  }

  const secondHandleDepositChange = (e) => {
    secondSetDepositValue(e.target.value);
  }

  // Handle ETH transactions when a person bets on a player.
  const handleDepositSubmit = async (e) => {
    e.preventDefault();
    console.log(depositValue)

    const ethValue = ethers.utils.parseEther(depositValue)
    const depositEth = await contract.depositEther({value: ethValue})
    await depositEth.wait()
    const balance = await provider.getBalance(contractAddress)
    const formattedBalance = ethers.utils.formatEther(balance)
    setBalance(formattedBalance);
  }

  // Handle ETH transactions when a person bets on a player.
  const handleSecondDepositSubmit = async (e) => {
    e.preventDefault();
    console.log(secondDepositValue)

    const ethValue = ethers.utils.parseEther(secondDepositValue)
    const depositEth = await secondContract.depositEther({value: ethValue})
    await depositEth.wait()
    const secondBalance = await provider.getBalance(secondContractAddress)
    const formattedBalance = ethers.utils.formatEther(secondBalance)
    secondSetBalance(formattedBalance);
  } 

  // UI for the Application
  return (
    <div className="container">
      <div className="container text-center">
        <div className="row mt-5">
          <div className="row">
            <h3>Player 1</h3>
            <p>Contract Balance: {balance}</p>
          </div>
          <div className="row">
          <form onSubmit = {handleDepositSubmit}>
            <div className="mb-3 w-25 container text-center">
              <input type="number" className="form-control container text-center" placeholder = "0" onChange = {handleDepositChange} value = {depositValue}/>
            </div>
            <button type="submit" className="btn btn-success">Place Bet</button>
          </form>
          </div>
          <div className="row mt-5">
            <h3>Player 2</h3>
            <p>Contract Balance: {secondBalance}</p>
          </div>
          <div className="row">
          <form onSubmit = {handleSecondDepositSubmit}>
            <div className="mb-3 w-25 container text-center">
              <input type="number" className="form-control container text-center" placeholder = "0" onChange = {secondHandleDepositChange} value = {secondDepositValue}/>
            </div>
            <button type="submit" className="btn btn-success">Place Bet</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;