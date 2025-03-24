# Simple Online Ethereum DApp
This project is an Ethereum-based decentralized application that simulates balances which allows a player to place bets. 
It comes with the contract, a test for that contract, and a user interface for the application.

## Technologies Used
Hardhat, Solidity, Bootstrap, React.js, MetaMask, ethers.js and node.js.  

## Testing Framework
chai.js

## Instructions
1. To start the program, we compile the contract Lock.sol in ```>/Project/Contract``` using: ```npx hardhat compile```.
2. We can deploy the accounts in ```>/Project/contract``` using: ```npx hardhat node```.  
3. Finally, to run the UI in ```>/Project/client``` using: ```npm run start```.

To run tests in >/Project/contract: npx hardhat test  
Additional (not needed to run) in >/Project/contract: npx hardhat run scripts/deploy.js --network localhost
